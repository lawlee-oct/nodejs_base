class UserController {
  async getUsers(req, res, next) {
    try {
      res.ok("This is Data", "Get All User");
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
