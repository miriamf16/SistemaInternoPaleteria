
const Precio = require('../models/Precio');


const mostrarPagina = async(req,res) => {

    const table = [{precio_vasoChico: 0,
                    precio_vasoMediano: 0,
                    precio_vasoGrande: 0,
                    precio_conoChico: 0,
                    precio_conoMediano: 0,
                    precio_conoGrande: 0,
                    precio_aguaChica: 0,
                    precio_aguaMediana: 0,
                    precio_aguaGrande: 0,
                    precio_ensaladaChica: 0,
                    precio_ensaladaGrande: 0,
                    precio_paletaAgua: 0,
                    precio_paletaLeche: 0,
                    precio_nachos: 0}];

    try {
        await Precio.createCollection();
        const comprobarExistencia = await Precio.estimatedDocumentCount();

        if(comprobarExistencia === 0){
            Precio.create(table);
        }
        const listaPrecios = await Precio.find().lean();
        res.render('precios',{listaPrecios: listaPrecios});
        
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
}


const editarPrecioForm = async(req,res) => {

    const {id} = req.params;

    try {
        const listaPrecios = await Precio.findById(id).lean();
        res.render('editarPrecios',{listaPrecios});
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
};  


const editarPrecio = async(req,res) => {

    const {id} = req.params;
    const listaPrecios = req.body;
    console.log(id,listaPrecios);
    try {
        await Precio.findByIdAndUpdate(id,listaPrecios);
        res.redirect('/precios');
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
};


module.exports = {
    mostrarPagina,
    editarPrecioForm,
    editarPrecio,
}   