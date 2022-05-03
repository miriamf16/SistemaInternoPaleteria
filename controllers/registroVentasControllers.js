
const Venta = require('../models/Venta');

// en proceso
const leerVentas = async(req, res) => {
    try {
        const ventas = await Venta.find().lean();
        res.render('registroVentas',{ventas: ventas});  
    } catch (error) {
        console.log(error);
        res.send('error');
    }
};

const eliminarVenta = async(req,res) => {
    
    const {id} = req.params;
    
    try {
        await Venta.findByIdAndDelete(id);
        res.redirect('/registroVentas'); 
    } catch (error) {
        console.log(error);
        res.send('error ' + error);
    }
};


const editarVentaForm = async(req,res) => {

    const {id} = req.params;

    try {
        const venta = await Venta.findById(id).lean();
        res.render('editarVenta',{venta});
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
};

const editarVenta = async(req,res) => {

    const {id} = req.params;
    const venta = req.body;
    try {
        await Venta.findByIdAndUpdate(id,venta);
        res.redirect('/registroVentas');
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
};


module.exports = {
    leerVentas,
    eliminarVenta,
    editarVentaForm,
    editarVenta,
}   