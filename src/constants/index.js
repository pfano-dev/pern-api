const { config } = require("dotenv");
config();
console.log(">>>>", process.env.SECRET);

module.exports = {
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.SERVER_URL,
  SECRET: process.env.SECRET,
};
