const { RateLimiterMemory } = require("rate-limiter-flexible");
const errors = require("../configs/errors");
const appErrors = require("../configs/app-errors");
require("dotenv").config();

const rateLimitConfig = {
  points: process.env.RATE_LIMIT_POINTS,
  duration: process.env.RATE_LIMIT_DURATION,
};

const addingRateLimitToHeader = (res, rateLimiterRes) => {
  res.set({
    "Retry-After": rateLimiterRes.msBeforeNext / 1000,
    "X-RateLimit-Limit": rateLimitConfig.points,
    "X-RateLimit-Remaining": rateLimiterRes.remainingPoints,
    "X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext),
  });
};

const rateLimiter = new RateLimiterMemory(rateLimitConfig);

module.exports = function rateLimiterMiddleware(req, res, next) {
  let ip =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.ip ||
    req.connection.remoteAddress;

  rateLimiter
    .consume(ip, 1)
    .then((rateLimiterRes) => {
      addingRateLimitToHeader(res, rateLimiterRes);
      return next();
    })
    .catch((rateLimiterRes) => {
      addingRateLimitToHeader(res, rateLimiterRes);
      next(new errors.TooManyRequests(appErrors.TOO_MANY_REQUESTS));
    });
};
