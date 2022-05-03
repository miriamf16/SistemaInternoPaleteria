
const express = require('express');
const { mostrarPagina, agregarVenta } = require('../controllers/ventaControllers');
const router = express.Router();

router.get('/', mostrarPagina);
router.post('/',agregarVenta);

module.exports = router;