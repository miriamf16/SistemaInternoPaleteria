
const Venta = require('../models/Venta');

const mostrarPagina = (req, res) => {
    res.render('venta');
};

 const agregarVenta = async(req, res) =>{

    var aux = 0;
   
    try {
        const {vasoC,vasoM,vasoG,conoC,conoM,conoG,aguaC,aguaM,aguaG,ensaladaC,ensaladaG,paletaA,paletaL,nachos} = new Venta(req.body)
        const venta = new Venta(req.body)
    
    if( (vasoC == null) && (vasoM == null) && (vasoG == null) && (conoC == null) && (conoM == null) && (conoG == null) && (aguaC == null) && (aguaM == null) && (aguaG == null) && (ensaladaC == null) && (ensaladaG == null) && (paletaA == null) && (paletaL == null) && (nachos == null)){ 
          res.redirect('/nuevaVenta'); 
    }      
    else{
        await venta.save();
        res.redirect('/pago'); 
    }
                   
    } catch (error) {
        console.log(error);
        res.send("error algo falló");  
    }
};

module.exports = {
    mostrarPagina,
    agregarVenta,
}   