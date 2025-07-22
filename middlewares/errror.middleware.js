module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    data: null,
    pagination: null,
    errorCode: err.code || 500,
    errorMessage: err.message || 'Internal Server Error'
  });
};
