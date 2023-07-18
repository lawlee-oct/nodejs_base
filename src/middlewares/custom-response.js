const httpStatus = require("http-status");

module.exports = function customResponse(options) {
  return (req, res, next) => {
    res.ok = function (result, message) {
      return res.status(httpStatus.OK).json({
        status: 200,
        data: result,
        message: message,
      });
    };

    next();
  };
};
