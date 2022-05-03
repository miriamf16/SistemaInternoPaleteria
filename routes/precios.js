
const express = require('express');
const { mostrarPagina, editarPrecioForm, editarPrecio } = require('../controllers/precioControllers');
const router = express.Router();

router.get('/', mostrarPagina);
router.get('/editar/:id',editarPrecioForm);
router.post('/editar/:id',editarPrecio);

module.exports = router;