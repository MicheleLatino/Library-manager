const mongoose = require('mongoose');

const utenteSchema = mongoose.Schema({
    userName: String,
    librip:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Libro"
    }]
});


module.exports = mongoose.model("Utente",utenteSchema);