const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// api/productos
router.post('/', usuarioController.crearUsuario); // Crear un usuario
router.get('/', usuarioController.obtenerUsuarios); // Obtener todos los usuarios 
router.put('/:id', usuarioController.actualizarUsuario); // Modificar un usuario a partir de su id
router.delete('/:id', usuarioController.eliminarUsuario); // Eliminar un usuario a partir de su id



module.exports = router