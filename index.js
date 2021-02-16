global.__rootdir = __dirname;
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");

const app = express();

// Connect to database
mongoose
  .connect(config.database.url, config.database.options)
  .then(() => {
    console.log("connected to database.");

    // Register routes
    app.use(routes);

    const server = app.listen(config.app.port, async () => {
      console.info(
        `${config.app.name} is running on port ${server.address().port}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
