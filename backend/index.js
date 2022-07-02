const express = require('express');
const conectarDB = require('./config/db');

const app = express();

conectarDB(); // Conectar a la base de datos

app.use(express.json()) // Permite que se puedan recibir datos en formato json
app.use('/api/usuarios', require('./routes/usuario')); // Ruta para el usuario


app.listen(4000, () => {
    console.log("listening on port 4000");
});