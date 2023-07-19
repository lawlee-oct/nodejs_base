const { UserRepository } = require("../repositories/user.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers() {
    const users = await this.userRepository.getUsers();

    return users;
  }
}

module.exports = new UserService();
