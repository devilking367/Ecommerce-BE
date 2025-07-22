module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'User',
    {
      // Tên hiển thị của người dùng (tùy chọn)
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      // Email người dùng - duy nhất và bắt buộc
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: 'unique_email', // tên index để tránh trùng khi migrate nhiều lần
          msg: 'Email must be unique',
        },
        validate: {
          isEmail: true, // validate đúng định dạng email
        },
      },

      // Mật khẩu đăng nhập - bắt buộc
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Vai trò người dùng (ví dụ: admin, user)
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
      },

      // Trạng thái tài khoản (ví dụ: active, inactive)
      status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
      },
    },
    {
      // Tùy chọn bảng
      tableName: 'Users',      // giữ tên bảng cố định
      timestamps: true,        // tự động thêm createdAt, updatedAt
      underscored: true,       // định dạng snake_case cho cột hệ thống
    }
  );
};
