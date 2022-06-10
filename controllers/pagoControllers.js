const Venta = require('../models/Venta')
const Precio = require('../models/Precio')
const ObjectId = require('mongodb').ObjectId;

const mostrarPagina = async(req,res) => {
    res.render('pago');
}

const mostrarTotal = async(req,res) =>{

   // const {id} = req.params;

    var id = ObjectId("626f3b2aac9a7e50e400acf0") ;
    var o_id = new ObjectId(id);
    //const {precio_vasoChico,precio_vasoMediano,precio_vasoGrande,precio_conoChico, precio_conoMediano,precio_conoGrande,precio_aguaChica,precio_aguaMediana,precio_aguaGrande,precio_ensaladaChica,precio_ensaladaGrande,precio_paletaAgua,precio_paletaLeche,precio_nachos} =  await Precio.find({ __id:ObjectId("626f3b2aac9a7e50e400acf0")}).lean();
    const precio = await Precio.findOne({ __id:ObjectId("626f3b2aac9a7e50e400acf0")});
    const {_id,precio_vasoChico,precio_vasoMediano,precio_vasoGrande,precio_conoChico, precio_conoMediano,precio_conoGrande,precio_aguaChica,precio_aguaMediana,precio_aguaGrande,precio_ensaladaChica,precio_ensaladaGrande,precio_paletaAgua,precio_paletaLeche,precio_nachos} = precio.toObject();
   
    const {vasoC,vasoM,vasoG,conoC,conoM,conoG,aguaC,aguaM,aguaG,ensaladaC,ensaladaG,paletaA,paletaL,nachos} = await Venta.find(id).lean();
    
    //const total = ((precio_vasoChico * vasoC) + (precio_vasoMediano * vasoM) +(precio_vasoGrande * vasoG) + (precio_conoChico * conoC) + (precio_conoMediano * conoM) + (precio_conoGrande * conoG) 
      //              +(precio_aguaChica * aguaC) + (precio_aguaMediana * aguaM)+ (precio_aguaGrande * aguaG) + (precio_ensaladaChica * ensaladaC)
        //            + (precio_ensaladaGrande * ensaladaG) + (precio_paletaAgua * paletaA) + (precio_paletaLeche * paletaL)
          //          + (precio_nachos * nachos));

    console.log(precio);
    console.log(precio_vasoChico);
    //console.log(total);


    res.render('pago',{
      //  total
    })                
}

module.exports = {
    mostrarPagina,
    mostrarTotal,
}   