const Receta = require("../models/Receta");


exports.obtenerRecetas = async (req, res) => { // Obtener todos las recetas
    try {
        const recetas = await Receta.find(); 
        if (recetas == '') return res.status(404).send('No hay recetas');
        res.json(recetas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.obtenerRecetaById = async (req, res) => { // Obtener una receta por id
    try {
        const receta = await Receta.findById(req.params.id); 
        if (!receta) return res.status(404).send('La receta no existe');
        res.json(receta);
    } catch (error) {
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.crearReceta =  async (req, res) => { // Crear una receta
    try {
        let receta;
        receta = new Receta(req.body);
        await receta.save(); 
        res.send(receta);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.actualizarReceta = async (req, res) => { // Modificar una receta
    try {
        const receta = await Receta.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
        if (!receta) return res.status(404).send('La receta no existe');
        res.json(receta);
    } catch (error) {
        res.status(500).send('Ha ocurrido un error');
    }
}

exports.eliminarReceta = async (req, res) => { // Eliminar una receta
    try {
        const receta = await Receta.findByIdAndDelete(req.params.id); 
        if (!receta) return res.status(404).send('La receta no existe');
        res.json(receta);
    } catch (error) {
        res.status(500).send('Ha ocurrido un error');
    }
}