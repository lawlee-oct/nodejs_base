const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
require("dotenv").config();

const rateLimiterMiddleware = require("./middlewares/rate-limit");
const errorLogger = require('./middlewares/error-logger');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors("*"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(rateLimiterMiddleware);

// Handler Error
app.use(errorLogger);
app.use(errorHandler());

const PORT = process.env.PORT || 3000;

const appListenedHandler = (err) => {
  if (err) {
    return console.log("Cannot run!");
  }

  console.log(`----> App listen on ${process.env.HOST}:${PORT} <----`);
};

app.listen(process.env.PORT, appListenedHandler);
