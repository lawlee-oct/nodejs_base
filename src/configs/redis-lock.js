const REDIS_LOCK_CONFIG = {
  timeout: 20000,
  retries: 3,
  delay: 100
};

module.exports = REDIS_LOCK_CONFIG;
