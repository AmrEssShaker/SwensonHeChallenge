const path = require("path");
require("dotenv").config({ path: path.join(__rootdir, ".env") });

module.exports = {
  app: {
    env: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    name: process.env.APP_NAME,
    version: process.env.VERSION,
    reading: {
      perPage: 15
    }
  },

  database: {
    url: process.env.DB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
