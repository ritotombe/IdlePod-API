const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
  userEmail: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  userName: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  answers: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
module.exports = Questionnaire;