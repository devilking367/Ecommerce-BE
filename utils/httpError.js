function throwHttpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.name = 'HttpError';
  throw error;
}

module.exports = { throwHttpError };