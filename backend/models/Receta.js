const mongoose = require('mongoose');

const RecetaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
}); 

module.exports = mongoose.model('Receta', RecetaSchema);

