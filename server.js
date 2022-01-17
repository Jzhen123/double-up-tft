const { Model } = require('objection');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT; // Loaded from .env file
    this.paths = {
      auth: "/api/auth",
      homepage: "/api/homepage",
      champion: "/api/champion",
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
    this.app.use(this.paths.champion, require("./routes/champion"));
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
  }
}

module.exports = Server;