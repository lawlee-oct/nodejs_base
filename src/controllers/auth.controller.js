const brcypt = require("bcrypt");

const { User } = require("../models");
const errors = require("../configs/errors");
const appErrors = require("../configs/app-errors");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/genarateToken");
const authSchema = require("../validation/authSchema");
const UserService = require("../services/user.service");
const { appEvent, EVENTS } = require("../event");

class AuthController {
  async login(req, res, next) {
    try {
      await authSchema.validateAsync(req.body);

      const findUser = await UserService.getUserByEmail(req.body.email);

      if (!findUser) {
        throw new errors.ValidationError(appErrors.USERNAME_PASSWORD_INCORRECT);
      }

      const validatorPass = await brcypt.compare(
        req.body.password,
        findUser.password
      );

      if (!validatorPass) {
        throw new errors.ValidationError(appErrors.USERNAME_PASSWORD_INCORRECT);
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
      await authSchema.validateAsync(req.body);

      const salt = await brcypt.genSalt(10);
      const hashed = await brcypt.hash(req.body.password, salt);

      const findEmail = await UserService.getUserByEmail(req.body.email);

      if (findEmail) {
        throw new errors.Unprocessable(appErrors.EMAIL_ALREADY_EXITS);
      }

      const newUser = await User.create({
        email: req.body.email,
        password: hashed,
        user_name: req.body.user_name,
      });

      appEvent.emit(EVENTS.USER.NEW, newUser);

      res.ok(newUser, "Register successfully!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
