const express = require('express');
const { use } = require('../routes/user');

class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.usuariosRoutePath = '/api/usuarios';
    
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();

    
  }
  
  middlewares() {
    // this.app.use(cors());
    
    //Lectura y parseo de body
    this.app.use(express.json());
    
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usuariosRoutePath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('está corriendo en el puerto: ', this.port)
    });
  }
}

module.exports = Server;