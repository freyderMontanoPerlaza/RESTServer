const express = require('express');



//servidor basado en clases
class Server {


    //llamados a mis metodos
    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        //metodo a llamar


        this.middlewares();

        this.routes();


    }



    middlewares() {
        this.app.use(express.static('public'));
    }




    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World')
        });
    }




    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto${this.port}`);
        });
    }


}



module.exports = Server;
