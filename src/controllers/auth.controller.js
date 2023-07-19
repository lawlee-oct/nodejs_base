const brcypt = require("bcrypt");

const { User } = require("../models");
const errors = require("../configs/errors");
const appErrors = require("../configs/app-errors");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/genarateToken");

class AuthController {
  async login(req, res, next) {
    try {
      const findUser = await User.findOne({ email: req.body.email });

      if (!findUser) {
        throw errors.ValidationError(appErrors.USERNAME_PASSWORD_INCORRECT);
      }

      const validatorPass = await brcypt.compare(
        req.body.password,
        findUser.password
      );

      if (!validatorPass) {
        throw errors.ValidationError(appErrors.USERNAME_PASSWORD_INCORRECT);
      }

      if (findUser && validatorPass) {
        const accessToken = generateAccessToken(req.body.id);
        const refreshToken = generateRefreshToken(req.body.id);

        const dataResponse = {
          access_token: accessToken,
          refresh_token: refreshToken,
        };

        res.ok(dataResponse, "Login successfully!");
      }
    } catch (error) {
      next(error);
    }
  }

  async register(req, res, next) {
    try {
      const salt = await brcypt.genSalt(10);
      const hashed = await brcypt.hash(req.body.password, salt);

      const findEmail = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (findEmail) {
        throw new errors.Unprocessable(appErrors.EMAIL_ALREADY_EXITS);
      }

      const newUser = await User.create({
        email: req.body.email,
        password: hashed,
        user_name: req.body.user_name,
      });

      res.ok(newUser, "Register successfully!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
