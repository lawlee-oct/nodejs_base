const jwt = require("jsonwebtoken");

const errors = require("../configs/errors");
const appErrors = require("../configs/app-errors");

const middleAuth = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
      const accessToken = token.split(" ")[1];

      jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
        if (err) {
          throw new errors.BadRequest(appErrors.TOKEN_INVALID);
        }

        req.user = user;

        next();
      });
    } else throw new errors.BadRequest(appErrors.TOKEN_INVALID);
  },
};

module.exports = middleAuth;
