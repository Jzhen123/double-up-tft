const { Model } = require('objection');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");

const User = require('./models/User');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT; // Loaded from .env file
    this.paths = {
      auth: "/api/auth",
      homepage: "/api/homepage",
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors()); // Enable CORS
    this.app.use(bodyParser.json());
  }

  // Bind controllers to routes
  routes() {
    this.app.use(this.paths.auth, require("./routes/auth"));
    this.app.use(this.paths.homepage, require("./routes/homepage"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }

  async initKnex() {
    const knexConfig = require('./knexfile');
    const knex = require('knex')(knexConfig[process.env.NODE_ENV])
    Model.knex(knex);
    const user = await User.query();
    console.log(user);
  }
}

module.exports = Server;