const express = require('express');
const conectarDB = require('./config/db');

const app = express();

conectarDB();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(4000, () => {
    console.log("listening on port 4000");
});