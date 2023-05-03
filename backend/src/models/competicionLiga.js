const {Schema, model } = require('mongoose');
const jugadorSchema = require('./jugador')

const ligaSchema = new Schema({
    nombre:{type:String},
    tipodatos:{type:String},
    Jugadores: {
      type: [{type: Schema.Types.ObjectId,ref:'jugadorSchema'}],
      required: true
    }
  });
  
module.exports = model('CompeticionLiga', ligaSchema)