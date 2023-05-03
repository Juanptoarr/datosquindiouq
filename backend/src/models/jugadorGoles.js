const {Schema, model } = require('mongoose');


const jugadorGolesSchema = new Schema({
   nombre:{type: String,required: true},
   goles:[{
    anio:{type:String},
    numGoles:{type: Number}
   }],
   total:{type:Number}
})

module.exports = model('jugadorGoles', jugadorGolesSchema)