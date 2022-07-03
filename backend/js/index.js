"use strict";
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//import models and controllers
var models = require('./models/usuarios')(app, mongoose);
var UsuariosCtrl = require('./controllers/usuarios2');
const router = express.Router();
router.route('/login/:usuario/:clave').get(UsuariosCtrl.Autenticate);
app.use('/api', router);
//connection to BD
mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err)
        throw err;
    console.log('MongoDB ok!!');
});
const Configuracion = {
    server: process.env.SERVER,
    port: process.env.PORT
};
app.listen(Configuracion, () => {
    console.log(`servidor escuchando ${Configuracion.server}:${Configuracion.port}`);
});
//const http = require('http');
//const hostname = '127.0.0.1';
//const port = 3000;
//const server = http.createServer((req:any, res:any) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hola Mundo');
//});
//server.listen(port, hostname, () => {
//  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
//});
