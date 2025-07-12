const users = require('./users.json');

exports.getAllUsers = (req, res) => {
  res.json(users);
};
