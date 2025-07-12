const users = require('./product.json');

exports.getAllProducts = (req, res) => {
  res.json(products);
};
