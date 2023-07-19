const UserService = require("../services/user.service");

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
}

module.exports = new UserController();
