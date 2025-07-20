const express = require('express');
const cors = require('cors');
const app = express();

// ✅ CORS phải đặt trước tất cả middleware/route
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Cho phép xử lý preflight (OPTIONS)
app.options('*', cors());

app.use(express.json());

// Import routes
const userRoutes = require('./api/users/user.route');
const categoryRoutes = require('./api/categories/category.route');
const productRoutes = require('./api/products/product.route');
const authRoutes = require('./api/auth/auth.route');

// Dùng routes
app.use('/api', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('E-commerce Backend API');
});

module.exports = app;
