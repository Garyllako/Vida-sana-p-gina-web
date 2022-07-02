const Usuario = require("../models/Usuario");


exports.obtenerUsuarios = async (req, res) => { // Obtener todos los usuarios
    try {
        const usuarios = await Usuario.find(); // Obtener todos los usuarios}
        if (usuarios == '') return res.status(404).send('No hay usuarios');
        res.json(usuarios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.obtenerUsuarioById = async (req, res) => { // Obtener un usuario por id
    try {
        const usuario = await Usuario.findById(req.params.id); // Obtener un usuario
        if (!usuario) return res.status(404).send('El usuario no existe');
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.crearUsuario =  async (req, res) => { // Crear un usuario
    try {
        let usuario;

        usuario = new Usuario(req.body);

        await usuario.save(); 
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.actualizarUsuario = async (req, res) => { // Modificar un usuario
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
        if (!usuario) return res.status(404).send('El usuario no existe');
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.eliminarUsuario = async (req, res) => { // Eliminar un usuario
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id); 
        if (!usuario) return res.status(404).send('El usuario no existe');
        res.json(usuario);
    } catch (error) {
        res.status(500).send('Ha ocurrido un error');
    }
}