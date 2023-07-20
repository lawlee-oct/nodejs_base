const appErrors = require("../configs/app-errors");
const errors = require("../configs/errors");
const UserService = require("../services/user.service");
const { uploadFileS3 } = require("../utils/uploadFileS3");

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();

      res.ok(users, "Get All User Successfully!");
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const user = await UserService.getUserById(req.params.id);

      res.ok(user, "Get User by id Successfully!");
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const userID = req.body.id;

      const user = await UserService.getUserById(userID);

      if (!user) {
        throw new errors.NotFound(appErrors.USER_DOES_NOT_EXITS);
      }

      if (req.file) {
        const result = await uploadFileS3(req.file);
        const avatarHref = result.Location;

        const data = {
          user_name: req.body?.user_name,
          birthday: req.body?.birthday,
          avatar: avatarHref,
        };

        const userUpdated = await UserService.updateUser(userID, data);

        res.ok(userUpdated, "Update user Successfully!");
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
