module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    name: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'user' },
    status: { type: DataTypes.STRING, defaultValue: 'active' }
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  });
};
