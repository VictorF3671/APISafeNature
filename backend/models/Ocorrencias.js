const mongoose = require('mongoose');

const OcorrenciasSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Por favor, forneça um nome'],
    maxlength: [60, 'O nome não pode ter mais que 60 caracteres'],
  },
  data: {
    type: String,
    required: [true, 'Por favor, forneça uma data'],
    unique: true,
  },
  descricao: {
    type: String,
    required: [true, 'Por favor, forneça uma descricao'],
    unique: true,
  },
  endereco: {
    type: String,
    required: [true, 'Por favor, forneça um endereço'],
    unique: true,
  },
  
});

module.exports = mongoose.models.Ocorrencias || mongoose.model('Ocorrencias', OcorrenciasSchema);