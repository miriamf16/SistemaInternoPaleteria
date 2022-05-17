
const express = require('express');
const {mostrarPagina,agregarVenta} = require('../controllers/pagoControllers');
const router = express.Router();

router.get('/', mostrarPagina);
router.post('/:id',agregarVenta);

module.exports = router;