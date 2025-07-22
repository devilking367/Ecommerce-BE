const users = require('./category.json');

exports.getAllCategories = (req, res) => {
  res.json(categories);
};
