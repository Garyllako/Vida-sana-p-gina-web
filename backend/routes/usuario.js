const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// api/usuarios
router.get('/', usuarioController.obtenerUsuarios); // Obtener todos los usuarios
router.get('/:id', usuarioController.obtenerUsuarioById); // Obtener un usuario a partir de su id
router.post('/', usuarioController.crearUsuario); // Crear un usuario
router.put('/:id', usuarioController.actualizarUsuario); // Modificar un usuario a partir de su id
router.delete('/:id', usuarioController.eliminarUsuario); // Eliminar un usuario a partir de su id



module.exports = router