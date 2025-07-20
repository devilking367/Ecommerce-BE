const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = db.User;

exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;

  // Basic validation
  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Optional: more detailed checks
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  try {
    // Check if email or username exists
    const userExists = await User.findOne({
      where: {
        [db.Sequelize.Op.or]: [{ email }, { username }]
      }
    });

    if (userExists) {
      return res.status(400).json({ message: 'Email or username already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, username, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Some thing went wrong' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Some thing went wrong' });
  }
};