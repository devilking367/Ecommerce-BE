const { error } = require('./response');

const errorHandler = (err, req, res, next) => {
  if (err.name === 'ZodError') {
    const details = JSON.parse(err.message).map(e => ({
      path: e.path,
      message: e.message
    }));

    return error(res, 400, 'Validation failed', {
      type: 'Validation',
      details
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return error(res, statusCode, message, {
    type: err.name || 'ServerError',
    details: err.errors || undefined,
  });
};

module.exports = errorHandler;