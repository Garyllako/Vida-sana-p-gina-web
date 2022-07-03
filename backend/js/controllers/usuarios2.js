"use strict";
var mongoose1 = require('mongoose');
const Usuarios = mongoose1.model('usuarios');
exports.Autenticate = function (req, res) {
    let usuario = new Usuarios({
        usuario: req.params.usuario,
        clave: req.params.clave
    });
    Usuarios.find({ usuario: req.params.usuario, clave: req.params.clave }, function (err, response) {
        if (err)
            return res.send(500, err.message);
        res.status(200).json(response);
    });
};
