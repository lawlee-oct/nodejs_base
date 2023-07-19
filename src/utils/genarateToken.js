const jwt = require("jsonwebtoken");

const generateAccessToken = (id) =>
  jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN);

const generateRefreshToken = (id) =>
  jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN);

module.exports = { generateAccessToken, generateRefreshToken };
