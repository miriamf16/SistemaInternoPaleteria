
const Venta = require('../models/Venta');
const ObjectId = require('mongodb').ObjectId;

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
        await venta.save((function (_id) {
             return function () { 
                 console.log(_id); 
             };
            })(venta._id));
        
        var id = venta._id ;
        var o_id = new ObjectId(id);
        console.log(o_id);

        const listaVenta = await Venta.find({"_id":o_id}).lean();
            res.render('pago',{listaVenta: listaVenta});
            
       // res.redirect('/pago'); 
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