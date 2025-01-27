
const Venta = require('../models/Venta');
const Precio = require('../models/Precio');
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
                // console.log(_id); 
             };
            })(venta._id));
        
        var id = venta._id ;
        var o_id = new ObjectId(id);
        console.log(o_id);

        const listaVenta = await Venta.find({"_id":o_id}).lean();


        const precio = await Precio.findOne({ __id:ObjectId("626f3b2aac9a7e50e400acf0")});
        const {_id,precio_vasoChico,precio_vasoMediano,precio_vasoGrande,precio_conoChico, precio_conoMediano,precio_conoGrande,precio_aguaChica,precio_aguaMediana,precio_aguaGrande,precio_ensaladaChica,precio_ensaladaGrande,precio_paletaAgua,precio_paletaLeche,precio_nachos} = precio.toObject();
   
        const total = ((precio_vasoChico * vasoC) + (precio_vasoMediano * vasoM) +(precio_vasoGrande * vasoG) + (precio_conoChico * conoC) + (precio_conoMediano * conoM) + (precio_conoGrande * conoG) 
                    +(precio_aguaChica * aguaC) + (precio_aguaMediana * aguaM)+ (precio_aguaGrande * aguaG) + (precio_ensaladaChica * ensaladaC)
                    + (precio_ensaladaGrande * ensaladaG) + (precio_paletaAgua * paletaA) + (precio_paletaLeche * paletaL)
                    + (precio_nachos * nachos));


       console.log(total);             
       res.render('pago',{listaVenta: listaVenta,total:total});
       venta.set('total',total);
       venta.save();     
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