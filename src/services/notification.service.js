const { EVENTS } = require("../event");
const {
  NotificationRepository,
} = require("../repositories/notification.repository");
const redis = require("../configs/redis");

class NotificationService {
  constructor() {
    this.notificationRepository = new NotificationRepository();
  }

  async createNotification(data) {
    const result = await this.notificationRepository.createNotification(data);

    return result;
  }
}

module.exports = new NotificationService();
