const express = require('express');
const router = express.Router();
const recetaController = require('../controllers/recetaController');

// api/usuarios
router.get('/', recetaController.obtenerRecetas); // Obtener todas las recetas
router.get('/:id', recetaController.obtenerRecetaById); // Obtener una receta a partir de su id
router.post('/', recetaController.crearReceta); // Crear una receta
router.put('/:id', recetaController.actualizarReceta); // Modificar una receta a partir de su id
router.delete('/:id', recetaController.eliminarReceta); // Eliminar una receta a partir de su id




module.exports = router