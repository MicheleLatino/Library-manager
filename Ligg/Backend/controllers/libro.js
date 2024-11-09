const mongoose = require('mongoose');
const Libro= require('../models/libro');
const Utente = require('../models/utente');

module.exports = {
    postUtente: async (req,res) => {
        try{
            const utente = await Utente.create(req.body);
            res.status(200).json(utente);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getUtenti: async (req,res)=>{
        const utente = await Utente.find();
        res.status(200).json(utente);
    },

    getLibriPerGen: async (req,res)=>{
        const libro = await Libro.find({categoria:(req.params.genere)});
        res.status(200).json(libro);
    },
    getLibri: async (req,res)=>{
        const libro = await Libro.find();
        res.status(200).json(libro);
    },

    getLibro: async (req,res) => {
        await Libro.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    
    postLibro: async(req,res)=>{
        try{
            const libro = await Libro.create(req.body);
            res.status(200).json(libro);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
}