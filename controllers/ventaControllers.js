
const Venta = require('../models/Venta');

const mostrarPagina = (req, res) => {
    res.render('venta');
};

const agregarVenta = async(req, res) =>{

    try {
        const venta = new Venta(req.body);
        await venta.save();
        res.redirect('/nuevaVenta');
    } catch (error) {
        console.log(error);
        res.send("error algo falló");  
    }
};



module.exports = {
    mostrarPagina,
    agregarVenta,
}   