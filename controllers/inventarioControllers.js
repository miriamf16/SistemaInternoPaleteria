const Inventario = require('../models/Inventario');

const mostrarPagina = async(req,res) => {

    const table = [{vasoNieveChico: 0,
                    vasoNieveMediano: 0,
                    vasoNieveGrande: 0,
                    conoChico: 0,
                    conoMediano: 0,
                    conoGrande: 0,
                    vasoAguaChico: 0,
                    vasoAguaMediano: 0,
                    vasoAguaGrande: 0,
                    bandejaChica: 0,
                    bandejaGrande: 0,
                    platoNachos: 0}];

    try {
        await Inventario.createCollection();
        const comprobarExistencia = await Inventario.estimatedDocumentCount();

        if(comprobarExistencia === 0){
            Inventario.create(table);
        }
        const inventario = await Inventario.find().lean();
        res.render('inventario',{inventario: inventario});
        
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
}


const editarInventarioForm = async(req,res) => {

    const {id} = req.params;

    try {
        const inventario = await Inventario.findById(id).lean();
        res.render('editarInventario',{inventario: inventario});
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
};  


const editarInventario = async(req,res) => {

    const {id} = req.params;
    const inventario = req.body;
    console.log(id,inventario);
    try {
        await Inventario.findByIdAndUpdate(id,inventario);
        res.redirect('/inventario');
    } catch (error) {
        console.log(error);
        res.send('error ' + error); 
    }
};


module.exports = {
    mostrarPagina,
    editarInventarioForm,
    editarInventario,
}   
