const express= require('express'),
    libroRouter= require('./libro'),
    prestitoRouter= require('./prestito');

const router = express.Router();

router.use('/api/v1/libro', libroRouter);
router.use('/api/v1/prestito', prestitoRouter);

module.exports = router;