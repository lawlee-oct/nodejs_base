const { User } = require("../models");
const { BaseRepository } = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async getUsers() {
    return this.model.findAll();
  }
}

module.exports = { UserRepository };
