
const express = require('express');
const { mostrarPagina, editarInventarioForm, editarInventario } = require('../controllers/inventarioControllers');
const router = express.Router();

router.get('/', mostrarPagina);
router.get('/editar/:id',editarInventarioForm);
router.post('/editar/:id',editarInventario);


module.exports = router;