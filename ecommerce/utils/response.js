exports.success = (res, data, pagination) =>
  res.json({
    success: true,
    data,
    pagination,
    errorCode: 200,
    errorMessage: "Success"
  });

exports.error = (res, code, message) =>
  res.status(code).json({
    success: false,
    data: null,
    pagination: null,
    errorCode: code,
    errorMessage: message
  });
