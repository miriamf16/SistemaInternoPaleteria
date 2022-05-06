
const express = require('express');
const {mostrarPagina} = require('../controllers/pagoControllers');
const router = express.Router();

router.get('/', mostrarPagina);
//router.post('/',agregarVenta);

module.exports = router;