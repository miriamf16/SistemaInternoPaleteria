
const mongoose = require("mongoose");
const { Schema } = mongoose;

const precioSchema = new Schema({
    precio_vasoChico: Number,
    precio_vasoMediano: Number,
    precio_vasoGrande: Number,
    precio_conoChico: Number,
    precio_conoMediano: Number,
    precio_conoGrande: Number,
    precio_aguaChica: Number,
    precio_aguaMediana: Number,
    precio_aguaGrande: Number,
    precio_ensaladaChica: Number,
    precio_ensaladaGrande: Number,
    precio_paletaAgua: Number,
    precio_paletaLeche: Number,
    precio_nachos: Number,
});

const Precio = mongoose.model("Precios", precioSchema);
module.exports = Precio;