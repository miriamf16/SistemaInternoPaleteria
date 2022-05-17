const Venta = require('../models/Venta')

const mostrarPagina = async(req,res) => {
    res.render('pago');
}


const agregarVenta = async(req,res) =>{
    const {id} = req.params;
    try {
        const listaVenta = await Venta.find(id).lean();
    res.render('pago',{listaVenta: listaVenta});

    } catch (error) {
    console.log(error);
    res.send('error ' + error); 
    }
}

module.exports = {
    mostrarPagina,
    agregarVenta,
}   