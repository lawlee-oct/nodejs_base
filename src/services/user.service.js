const appErrors = require("../configs/app-errors");
const errors = require("../configs/errors");
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

  async getUserByEmail(email) {
    const user = await this.userRepository.getUserByEmail(email);

    return user;
  }

  async updateUser(userId, newItem) {
    const findUser = await this.userRepository.getUserById(userId);

    if (!findUser) {
      throw new errors.NotFound(appErrors.USER_DOES_NOT_EXITS);
    }

    await this.userRepository.updateUser(userId, newItem);

    const userUpdated = await this.userRepository.getUserById(userId);

    return userUpdated;
  }
}

module.exports = new UserService();
