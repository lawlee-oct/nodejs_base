const AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

function sendMail(email, subject, content) {
  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: content,
        },
      },
      Subject: {
        Data: subject,
      },
    },
    Source: process.env.EMAIL_ADMIN,
  };

  return ses.sendEmail(params).promise();
}

module.exports = { sendMail };
