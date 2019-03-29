const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};