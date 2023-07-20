module.exports = {
  // Server errors and misconstructed requests
  GENERAL_ERROR: {
    code: 1000,
    message: "Something when wrong. Please try again.",
  },
  MAINTENANCE_ERROR: {
    code: 1001,
    message:
      "API is under maintenance, please try again in a couple of minutes.",
  },
  API_NOT_FOUND: {
    code: 1002,
    message: "API not found.",
  },
  TOO_MANY_REQUESTS: {
    code: 1004,
    message: "Too many requests.",
  },

  // Invalid input
  REQUIRED_PARAMETERS_ARE_MISSING: {
    code: 1100,
    message: "Required parameters are missing.",
  },
  INCORRECT_FORMAT: {
    code: 1102,
    message: "Incorrect data type or format.",
  },
  MALFORMED_REQUEST: {
    code: 1103,
    message:
      "Malformed request (eg. parameters containing invalid characters).",
  },

  // Authentication failures
  USERNAME_PASSWORD_MISSING: {
    code: 1200,
    message: "Username/password missing.",
  },
  LOGIN_FAILED: {
    code: 1201,
    message: "Login failed.",
  },
  USER_TEMPORARILY_BLOCKED_WHEN_LOGIN_FAILED: {
    code: 1202,
    message:
      "User has been temporarily blocked because of repeated unsuccessful login attempts..",
  },
  LOGIN_REQUIRED: {
    code: 1203,
    message: "User login is required.",
  },
  TOKEN_INVALID: {
    code: 1204,
    message: "Token is invalid.",
  },
  TOKEN_INVALID_REVOKED: {
    code: 1205,
    message: "Token was revoked.",
  },
  API_KEY_INVALID: {
    code: 1206,
    message: "api-key is invalid.",
  },
  SIGNATURE_INVALID: {
    code: 1207,
    message: "Signature invalid.",
  },
  USERNAME_PASSWORD_INCORRECT: {
    code: 1209,
    message: "Email or password is incorrect.",
  },
  PASSWORD_INCORRECT: {
    code: 1210,
    message: "password is incorrect.",
  },
  EMAIL_ALREADY_EXITS: {
    code: 1211,
    message: "Email address already exists"
  },
  USER_DOES_NOT_EXITS: {
    code: 1212,
    message: "User does not exits."
  }
};
