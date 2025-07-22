module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '12345',
  DB: 'ecommerce_db',
  dialect: 'mysql',
  //HOST: process.env.DB_HOST,
  //USER: process.env.DB_USER,
  //PASSWORD: process.env.DB_PASS,
  //DB: process.env.DB_NAME,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
