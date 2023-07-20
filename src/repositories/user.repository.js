const { User } = require("../models");
const { BaseRepository } = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async getUsers() {
    return this.findAll();
  }

  async getUserById(id) {
    return this.findById(id);
  }

  async updateUser(userId, newItem) {
    const updateUser = await this.update(newItem, {
      where: { id: userId },
    });

    return updateUser;
  }
}

module.exports = { UserRepository };
