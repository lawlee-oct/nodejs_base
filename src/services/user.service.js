const { UserRepository } = require("../repositories/user.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUsers() {
    const users = await this.userRepository.getUsers();

    return users;
  }

  async getUserById(id) {
    const user = await this.userRepository.getUserById(id);

    return user;
  }
}

module.exports = new UserService();
