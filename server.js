const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require( "./routes" );
const  sequelize  = require('./libs/sequelize');

class Server {
  constructor() {

    this.app = express();
    this.middleware();
    this.app.use(express.json());
    this.routes();

  }
  middleware() {

    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));

  }
  routes() {

    routerApi(this.app);
  }

  listen() {

     this.app.listen(process.env.PORT_SERVER, () => {
      sequelize.authenticate().then(() => {
        console.log(`Server port: ${process.env.PORT_SERVER} - Connected to database RTP ${process.env.PORT}`);
      }).catch(err =>{ 
        console.log({error: 'Error trying to connect to database'});
      })
    })
  }
}
module.exports = Server;