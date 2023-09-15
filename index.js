require('dotenv').config();
//paquete propias de node usual mente van antes de las de terceros 
const Server = require('./models/server');


//instanciar nuestra clase
const server = new Server();











//llamar el metodo listen
server.listen();











