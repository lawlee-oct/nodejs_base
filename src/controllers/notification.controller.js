const redisLock = require("redislock");

const { appEvent, EVENTS } = require("../event");
const { redisClient } = require("../configs/redis");
const notificationService = require("../services/notification.service");
const REDIS_LOCK_CONFIG = require("../configs/redis-lock");

class NotificationController {
  async createNotification(req, res, next) {
    // const lock = redisLock.createLock(redisClient, REDIS_LOCK_CONFIG);

    try {
      // await lock.acquire("CREATE_NOTIFICATION");

      const data = { title: req.body.title, content: req.body.content };

      const notification = await notificationService.createNotification(data);

      if (notification) {
        appEvent.emit(EVENTS.NOTIFICATION.NEW, notification);
      }

      // await lock.release();

      return res.ok(notification, "Create notification Successfully!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new NotificationController();
