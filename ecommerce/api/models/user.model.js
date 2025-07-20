module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name: DataTypes.STRING,
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    role: { type: DataTypes.STRING, defaultValue: 'user' },
    status: { type: DataTypes.STRING, defaultValue: 'active' }
  });
};
