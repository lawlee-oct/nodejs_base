const eventEmitter = require("eventemitter2");

const redis = require("./configs/redis");

const appEvent = new eventEmitter.EventEmitter2({
  wildcard: true,
});

const publisher = redis.createRedisClient();
let isPublisherConnected = false;

// 1/ Define event mới ở đây
const EVENTS = Object.freeze({
  USER: {
    NEW: "user:new",
    GET: "user:get",
  },
});

publisher
  .connect()
  .then(() => {
    console.log("redis publisher connected!");
    isPublisherConnected = true;
  })
  .catch((err) => {
    console.log("redis publisher connect failed!", err);
    isPublisherConnected = false;
  });

// Publish to redis event
appEvent.on(EVENTS.USER.NEW, async (user) => {
  try {
    setImmediate(() => {
      redis.redisClient.set(`user_${user.id}`, JSON.stringify(user));
    });
  } catch (error) {
    console.log(error);
  }
});

appEvent.on(EVENTS.USER.GET, function (id) {
  if (isPublisherConnected) {
    setImmediate(() => {
      const data = redis.redisClient.get(`user_${id}`);
      publisher.publish(this.event, JSON.stringify(data));
    });
  }
});

module.exports = {
  appEvent,
  EVENTS,
};
