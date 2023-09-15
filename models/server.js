const express = require('express');



//servidor basado en clases
class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        //metodo de rutas de mi aplicacion
        this.routes();
      

    }







    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World')
        });
    }




    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto${this.port}`);
        });
    }


}



module.exports =  Server;
