const mongoose = require('mongoose');

const prestitoSchema = mongoose.Schema({
    da:String,
    a:String,
    titolo:String,
    img:String,
    userNameRich:String,
    libroObj:mongoose.Schema.Types.ObjectId,
    richiedenteObj:mongoose.Schema.Types.ObjectId,
    stato:{
        type: String,
        default:"in attesa",
    },
});


module.exports = mongoose.model("Prestito",prestitoSchema);