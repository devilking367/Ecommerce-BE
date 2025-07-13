const app = require('./app');
const db = require('./api/models'); // hoặc './src/models' nếu bạn dùng module hóa

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ alter: true }) // hoặc alter: true nếu bạn muốn cập nhật bảng mà không drop
  .then(() => {
    console.log('✅ DB synced');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to sync DB:', err);
    process.exit(1); // dừng server nếu DB fail
  });
