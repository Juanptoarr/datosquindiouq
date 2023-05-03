const {Schema, model } = require('mongoose');
const jugadorGoles = require('../models/jugadorGoles')

const ligaSchema = new Schema({
    nombre:{type:String},
    tipodatos:{type:String},
    Jugadores: {
      type: [{type: Schema.Types.ObjectId,ref:'jugadorGoles'}],
      required: true
    }
  });
  
module.exports = model('CompeticionLiga', ligaSchema)