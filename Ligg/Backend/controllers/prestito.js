const mongoose = require('mongoose');
const Libro= require('../models/libro');
const Prestito = require('../models/prestito');
const Utente = require('../models/utente');

module.exports = {

    chiediPrestito: async(req,res)=>{
        try{
            let utente;
            //FORSE DEVI METTERE FIND COME STA IN CHIEDI PRESTITO UTENTE (QUA SOPRA) IN FUNZIONE
            await Utente.find({_id:req.body.richiedente})
            .then(u => {
                utente = u
            })
            await Libro.findById(req.params.id)
            .then(async l => { if(l.stato==="Disponibile"){
                return Prestito.create({
                    libroObj:l,
                    richiedenteObj:mongoose.Types.ObjectId(req.body.richiedenteObj),
                    da:req.body.da,
                    a:req.body.a,
                    img:req.body.img,
                    titolo:req.body.titolo,
                    userNameRich:req.body.userNameRich

                })}
                else{
                    console.log('Libro non disponibile')
                }
            })
            .then(() => res.json({message:"hai effettuato la richiesta"}))
        }
        catch(err){
            res.status(500).json(err);
        }
    },


    getPrestiti: async (req,res)=>{
        const prestito = await Prestito.find();
        res.status(200).json(prestito);
    },
    getRichPUt: async (req,res)=>{
        const prestito = await Prestito.find({richiedenteObj:req.params.id})
        res.status(200).json(prestito);
    },


    approvaPrestito:async (req,res) =>{
        try{
            let prestito = await Prestito.findByIdAndDelete(req.params.id);
            const app = {$set:{stato:"Non disponibile", possessore:`${prestito.richiedenteObj}`}};
            await Libro.updateOne(Libro.find({_id:prestito.libroObj}),app)
            await Utente.findOneAndUpdate({_id:prestito.richiedenteObj},{$push: { librip : prestito.libroObj }}).then(u =>{ 
                console.log(u);
                res.status(200).json(u);
            })
        }
        catch(err){
            res.status(500).json(err);
        }
        
    } ,

    NoApprPrestito: async (req,res) =>{
        try{
            await Prestito.findByIdAndDelete(req.params.id)
            .then(() => res.json({messge:"brano rimosso"}))
        
    }
        catch(err){
            res.status(500).json(err);
        }
    },

        getUtente: async (req,res)=>{
            await Utente.findById(req.params.id)
            .then(l => l.populate("librip"))
            .then(result =>  {res.json(result)})
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        },
        getPrestUtente: async (req,res)=>{
            await Libro.find({possessore:req.params.id})
            .then(result =>  {res.json(result)})
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        },
        getLibriPrestati: async (req,res)=>{
            await Libro.find({stato:"Non disponibile"})
            .then(result =>  {res.json(result)})
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        }

}