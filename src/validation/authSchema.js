const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(16).required(),
  user_name: Joi.string(),
});

module.exports = authSchema;
