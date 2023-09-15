const express = require('express');
const  cors = require('cors')


//servidor basado en clases
class Server {


    //llamados a mis metodos
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPatch = '/api/usuarios';


        //metodos a llamar
        this.middlewares();
        this.routes();


    }



    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura y Parceo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }




    routes() {
        //configurar mis rutas
       this.app.use(this.usuariosPatch, require('../routes/usuarios'));

    }

    

    




    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto${this.port}`);
        });
    }

}



module.exports = Server;
