const UserService = require("../services/user.service");

class UserController {
  async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();

      res.ok(users, "Get All User");
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      res.ok("This is Data", "Get User By ID");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
