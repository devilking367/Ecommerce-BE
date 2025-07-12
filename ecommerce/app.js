const express = require('express');
const app = express();

const userRoutes = require('./api/users/user.route');
const categoryRoutes = require('./api/categories/category.route');
const productRoutes = require('./api/products/product.route');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('E-commerce Backend API');
});

module.exports = app;
