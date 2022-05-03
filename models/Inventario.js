
const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventarioSchema = new Schema({
    vasoNieveChico: Number,
    vasoNieveMediano: Number,
    vasoNieveGrande: Number,
    conoChico: Number,
    conoMediano: Number,
    conoGrande: Number,
    vasoAguaChico: Number,
    vasoAguaMediano: Number,
    vasoAguaGrande: Number,
    bandejaChica: Number,
    bandejaGrande: Number,
    platoNachos: Number,
});

const Inventario = mongoose.model("inventario", inventarioSchema);
module.exports = Inventario;