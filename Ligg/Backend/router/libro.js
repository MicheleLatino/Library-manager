const express= require('express');
const libroController = require('../controllers/libro');

const libroRouter = express.Router();

libroRouter.get('/:genere', libroController.getLibriPerGen);


libroRouter.get('/', libroController.getLibri);
libroRouter.post('/', libroController.postLibro);


libroRouter.get('/singolo/:id([0-9a-fA-F]{24})', libroController.getLibro)
libroRouter.get('/nokpt/utenti', libroController.getUtenti);
libroRouter.post('/utente', libroController.postUtente);



module.exports = libroRouter;