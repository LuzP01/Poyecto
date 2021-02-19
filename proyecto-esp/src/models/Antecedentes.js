const mongoose = require('mongoose');
const { Schema } = mongoose;

const AntecedenteSchema = new Schema({
    antecedentes: { type: String, required: true},
    antecedentesPaciente: {type: String, required: true},
    date:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Antecendentes', AntecedenteSchema);