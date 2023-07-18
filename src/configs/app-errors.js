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
  WALLET_NOT_FOUND: {
    code: 1003,
    message: "Wallet not found.",
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
  PERMISSION: {
    code: 1208,
    message: "permission denied.",
  },
  USERNAME_PASSWORD_INCORRECT: {
    code: 1209,
    message: "Email or password is incorrect.",
  },

  PASSWORD_INCORRECT: {
    code: 1210,
    message: "password is incorrect.",
  },
  // Presale
  PRESALE_NOT_FOUND: {
    code: 2000,
    message: "Presale not found.",
  },

  PAYMENT_HISTORY_NOT_FOUND: {
    code: 2001,
    message: "Payment history not found.",
  },

  WHITELIST_NOT_INVALID: {
    code: 2002,
    message: "Whitelist not invalid.",
  },

  PRESALE_NOT_ALREADY: {
    code: 2003,
    message: "Presale not already.",
  },

  BUYER_NOT_FOUND: {
    code: 2004,
    message: "Buyer not found.",
  },

  NOT_YET_TIME_FOR_PURCHASING: {
    code: 2005,
    message: "Presale: Not yet time for purchasing.",
  },
  TOKEN_SALE_HAS_ENDED: {
    code: 2006,
    message: "Presale has ended.",
  },

  INLVAID_PACKAGE_NUMER: {
    code: 2007,
    message: "Invalid package number",
  },

  ALL_TOKEN_HAS_BEEN_SOLD_OUT: {
    code: 2008,
    message: "All token has been sold out.",
  },

  TOTAL_TOKEN_BOUGHT_AND_BUYING_HAS_EXCEEDED_THE_LIMIT: {
    code: 2009,
    message: "Total token bought and buying has exceeded the limit.",
  },

  NOT_ENOUGH_USDT_BALANCE: {
    code: 2010,
    message: "Not enough USDT balance.",
  },

  FILE_NOT_FOUND: {
    code: 2011,
    message: "File not found.",
  },

  PRESALE_NOT_ACTIVE: {
    code: 2012,
    message: "Presale not active.",
  },

  WHITE_LIST_CONTAINT_INVALID_USDT_AMOUNT: {
    code: 2013,
    message: "White list containt invalid USDT amount.",
  },

  WHITE_LIST_CONTAINT_INVALID_ADDRESS: {
    code: 2014,
    message: "White list containt invalid address.",
  },

  WHITELIST_ONLY: {
    code: 2015,
    message:
      "Private Presale is only available for those who have registered in the Whitelist",
  },

  WHITE_LIST_CONTAINT_INVALID_USDT_AMOUNT_LESS_THAN_MIN_AMOUNT: {
    code: 2016,
    message:
      "The whitelist contains the number of USDT which should not be less MIN AMOUNT",
  },

  WHITE_LIST_CONTAINT_INVALID_USDT_AMOUNT_MORE_THAN_MAX_AMOUNT: {
    code: 2017,
    message:
      "The whitelist contains the number of USDT which should not be more than MAX AMOUNT",
  },

  PRESALE_IMPORT_INVALID_DATA: {
    code: 2018,
    message: "Import Presale: Invalid data",
  },
  PRESALE_EXISTED: {
    code: 2019,
    message: "Presale existed",
  },
  UPLOAD_ONLY_EXCEL_FILE: {
    code: 2020,
    message: "Please upload only excel file.",
  },
  TRANSACTION_FAILED: {
    code: 2021,
    message: "TRANSACTION FAILED",
  },
};
