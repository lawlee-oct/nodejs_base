// const bluebird = require('bluebird');
const redis = require('redis');
require('dotenv').config();

const redisConfig = {
  url: process.env.REDIS_URI,
  prefix: process.env.REDIS_PREFIX || 'nodejs_base',
};

console.log(`Redis connecting to ${process.env.REDIS_URI}`);

const redisClient = redis.createClient(redisConfig);

redisClient.connect().catch(err => {
  console.log(err.message);
});

redisClient.on('connect', () => {
  console.log('✅ 💃 connect redis success !');
});

redisClient.on('ready', () => {
  console.log('✅ 💃 redis have ready !');
});

redisClient.on('error', err => {
  console.log('Redis err', err.message);
});

const createRedisClient = () => {
  return redis.createClient(redisConfig);
};

// promise
// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);

module.exports = {
  redisClient,
  createRedisClient,
};
