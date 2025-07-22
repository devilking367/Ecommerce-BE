const { success } = require('../../utils/response');
const { loginSchema, registerSchema } = require('./auth.chema');
const authService = require('./auth.service')

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = registerSchema.parse(req.body);
    await authService.register({ name, email, password })
    success(res, { message: 'User registered successfully' })
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    const token = await authService.login({ email, password })
    success(res, { token })
  } catch (err) {
    next(err);
  }
};