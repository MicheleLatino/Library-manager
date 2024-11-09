const express= require('express');
const prestitoController = require('../controllers/prestito');

const prestitoRouter = express.Router();


prestitoRouter.get('/', prestitoController.getPrestiti);
prestitoRouter.put('/approva/:id', prestitoController.approvaPrestito);
prestitoRouter.put('/Noapprova/:id', prestitoController.NoApprPrestito);

prestitoRouter.get('/utente/:id([0-9a-fA-F]{24})', prestitoController.getUtente);
prestitoRouter.get('/prestUt/:id([0-9a-fA-F]{24})', prestitoController.getPrestUtente);
prestitoRouter.get('/prestiti/', prestitoController.getLibriPrestati);
prestitoRouter.get('/RichPUt/:id([0-9a-fA-F]{24})', prestitoController.getRichPUt);



prestitoRouter.post('/:id([0-9a-fA-F]{24})', prestitoController.chiediPrestito);




module.exports = prestitoRouter;