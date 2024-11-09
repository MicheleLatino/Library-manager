const mongoose = require('mongoose');

const libroSchema = mongoose.Schema({
    titolo: String,
    img: String,
    autore:String,
    categoria: String,
    possessore:{
        type: String,
        default:"Bibilioteca"
    },
    stato:{
        type: String,
        default:"Disponibile",
    },
});


module.exports = mongoose.model("Libro",libroSchema);