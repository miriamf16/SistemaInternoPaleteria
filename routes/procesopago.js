
const express = require('express');
const {mostrarPagina,agregarVenta, mostrarTotal} = require('../controllers/pagoControllers');
const router = express.Router();

router.get('/',mostrarTotal);
//router.post('/:id',agregarVenta);


module.exports = router;