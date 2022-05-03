
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ventaSchema = new Schema({
    vasoChico: Number,
    vasoMediano: Number,
    vasoGrande: Number,
    conoChico: Number,
    conoMediano: Number,
    conoGrande: Number,
    aguaChica: Number,
    aguaMediana: Number,
    aguaGrande: Number,
    ensaladaChica: Number,
    ensaladaGrande: Number,
    paletaAgua: Number,
    paletaLeche: Number,
    nachos: Number,
});

const Venta = mongoose.model("Ventas", ventaSchema);
module.exports = Venta;