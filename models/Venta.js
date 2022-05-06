
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ventaSchema = new Schema({
    vasoC: Number,
    vasoM: Number,
    vasoG: Number,
    conoC: Number,
    conoM: Number,
    conoG: Number,
    aguaC: Number,
    aguaM: Number,
    aguaG: Number,
    ensaladaC: Number,
    ensaladaG: Number,
    paletaA: Number,
    paletaL: Number,
    nachos: Number,
});

const Venta = mongoose.model("Ventas", ventaSchema);
module.exports = Venta;