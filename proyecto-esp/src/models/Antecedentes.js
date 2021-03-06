const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;
const user = mongoose.model('User');

const AntecedenteSchema = new Schema({
    antecedentes: { type: String, required: true},
    antecedentesPaciente: {type: String, required: true},
    date:{ type: Date, default: Date.now},
    user:{ type: Schema.ObjectId , ref: "User"}

});

module.exports = mongoose.model('Antecendentes', AntecedenteSchema);

