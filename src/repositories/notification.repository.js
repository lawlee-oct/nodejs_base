const { Notification } = require("../models");
const { BaseRepository } = require("./base.repository");

class NotificationRepository extends BaseRepository {
  constructor() {
    super(Notification);
  }

  async createNotification(data) {
    return this.insert(data);
  }
}

module.exports = { NotificationRepository };
