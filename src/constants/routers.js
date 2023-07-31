const ROUTERS = {
  // AUTHEN
  LOGIN: "/login",
  REGISTER: "/register",

  // USER
  GET_USERS: "/users",
  GET_USER_BY_ID: "/user/:id",
  UPDATE_USER: "/user/update",

  // Notifications
  CREATE_NOTIFICATION: '/notification/create'
};

module.exports = { ROUTERS };
