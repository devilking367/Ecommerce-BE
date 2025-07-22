const userService = require('./user.service');
const { success, error } = require('../../utils/response');

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAll(req.query);
    success(res, result.data, result.pagination);
  } catch (err) {
    next(err);
  }
};
