const ROUTERS = {
  // AUTHEN
  LOGIN: "/login",
  REGISTER: "/register",

  // USER
  GET_USERS: "/users",
  GET_USER_BY_ID: "/user/:id",
  UPDATE_USER: "/user/update",

  // Notifications
  CREATE_NOTIFICATION: '/notification/create',

  // Web3
  GET_BALANCE: '/balance',
  SEND_ETH: '/send-eth'
};

module.exports = { ROUTERS };
