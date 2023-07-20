const S3 = require("aws-sdk/clients/s3");

const s3Butket = new S3({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

module.exports = { s3Butket };
