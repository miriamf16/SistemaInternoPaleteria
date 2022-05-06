const Venta = require('../models/Venta')

const mostrarPagina = async(req,res) => {


        res.render('pago');
        
    
}



module.exports = {
    mostrarPagina,
  
}   