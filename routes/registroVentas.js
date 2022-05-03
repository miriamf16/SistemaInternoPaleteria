
const express = require('express');
const router = express.Router();
const { leerVentas, eliminarVenta, editarVentaForm, editarVenta } = require('../controllers/registroVentasControllers');
const verificarUser = require('../middlewares/verificarUser');



router.get('/',verificarUser,leerVentas);
router.get('/eliminar/:id', eliminarVenta);
router.get('/editar/:id',editarVentaForm);
router.post('/editar/:id',editarVenta);

module.exports = router;