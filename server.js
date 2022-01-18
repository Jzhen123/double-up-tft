const { Model } = require('objection');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const api = require('./routes/api');

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
    this.initKnex();
  }

  middlewares() {
    this.app.use(cors()); // Enable CORS
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  // Bind controllers to routes
  routes() {
    this.app.use('/api', api);
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