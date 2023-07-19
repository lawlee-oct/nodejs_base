const brcypt = require("bcrypt");

const { User } = require("../models");
const errors = require("../configs/errors");
const appErrors = require("../configs/app-errors");

class AuthController {
  async login(req, res, next) {
    try {
      res.ok("This is login", "This is login");
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

      res.ok(newUser, "Register successful!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
