const { throwHttpError } = require("../../utils/httpError");
const { User } = require("../models");
const jwt = require('jsonwebtoken');
const db = require('../models');
const bcrypt = require('bcryptjs');

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throwHttpError(400, 'Invalid email or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throwHttpError(400, 'Invalid email or password');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token
}

exports.register = async ({ name, email, password }) => {
  const userExists = await User.findOne({
    where: {
      [db.Sequelize.Op.or]: [{ email }]
    }
  });

  if (userExists) {
    return throwHttpError(400, 'Email or username already in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashedPassword });
}