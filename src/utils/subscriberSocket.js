const { EVENTS } = require("../event");
const {
  NotificationRepository,
} = require("../repositories/notification.repository");
const redis = require("../configs/redis");

class SubscribeSocket {
  constructor() {
    this.notificationRepository = new NotificationRepository();
    this.subscriber = redis.createRedisClient();
    this.subscriber
      .connect()
      .then(() => {
        console.log("✔️  Redis SSE subscriber connected!");
      })
      .catch((err) => {
        console.log("❌ Redis SSE subscriber connect failed!", err);
      });
  }

  initialSubcriber() {
    this.subscriber.subscribe(EVENTS.NOTIFICATION.NEW, (data) => {
      return data;
    });
  }
}

module.exports = new SubscribeSocket();
