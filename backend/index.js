const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

conectarDB(); // Conectar a la base de datos

app.use(cors());
app.use(express.json()) // Permite que se puedan recibir datos en formato json


app.use('/api/usuarios', require('./routes/usuario')); // Ruta para el usuario
app.use('/api/recetas', require('./routes/receta')); // Ruta para las recetas

app.listen(4000, () => {
    console.log('\x1b[1m\x1b[42mlistening on port 4000\x1b[0m');
});