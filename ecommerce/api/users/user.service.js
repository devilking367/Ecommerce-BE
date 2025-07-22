const { User } = require('../models');
const logger = require('../../utils/logger');

exports.getAll = async ({ page = 1, limit = 10 }) => {
  const offset = (page - 1) * limit;
  const { count, rows } = await User.findAndCountAll({ offset, limit: +limit });

  logger.info(`Fetched ${count} users`);

  return {
    data: rows,
    pagination: {
      page: +page,
      limit: +limit,
      total: count,
      totalPages: Math.ceil(count / limit)
    }
  };
};
exports.getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};