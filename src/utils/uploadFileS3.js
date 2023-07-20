const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const { s3Butket } = require("../configs/s3");

function uploadFileS3(file) {
  const fileStream = fs.createReadStream(file.path);

  const timestamp = new Date().getTime();

  const keyFile = `${timestamp}-${uuidv4()}-${file.originalname}`;

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: keyFile,
    ContentType: file.mimetype,
  };

  return s3Butket.upload(uploadParams).promise();
}

module.exports = { uploadFileS3 };
