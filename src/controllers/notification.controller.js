const { appEvent, EVENTS } = require("../event");
const notificationService = require("../services/notification.service");

class NotificationController {
  async createNotification(req, res, next) {
    try {
      const data = { title: req.body.title, content: req.body.content };

      const notification = await notificationService.createNotification(data);

      if (notification) {
        appEvent.emit(EVENTS.NOTIFICATION.NEW, notification);
      }

      return res.ok(notification, "Create notification Successfully!");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new NotificationController();
