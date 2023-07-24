const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();

const rateLimiterMiddleware = require("./middlewares/rate-limit");
const errorLogger = require("./middlewares/error-logger");
const errorHandler = require("./middlewares/error-handler");
const connectDatabase = require("./utils/connectDatabase");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const customResponse = require("./middlewares/custom-response");
const { s3Butket } = require("./configs/s3");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors("*"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(rateLimiterMiddleware);
app.use(customResponse());
app.use(compression());

// ROUTER
app.use("/v1", userRouter);
app.use("/v1/auth", authRouter);

// Handler Error
app.use(errorLogger);
app.use(errorHandler());

const PORT = process.env.PORT || 3000;

const appListenedHandler = (err) => {
  if (err) {
    return console.log("Cannot run!");
  }

  connectDatabase();
  console.log(`----> App listen on ${process.env.HOST}:${PORT} <----`);
};

app.listen(process.env.PORT, appListenedHandler);

// const presignURLTest = s3Butket.getSignedUrl("getObject", {
//   Bucket: process.env.AWS_BUCKET_NAME,
//   Key: "1690162119822-a0dab9d5-ac16-477f-8edb-96ab65f7fe60-watches-image.png",
//   Expires: 100,
// });
