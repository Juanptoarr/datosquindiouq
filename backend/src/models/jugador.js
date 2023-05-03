const {Schema, model } = require('mongoose');


const jugadorSchema = new Schema({
   nombre:{type: String,required: true},
   contador:[{
    anio:{type:String},
    num:{type: Number}
   }],
   total:{type:Number}
})

module.exports = model('jugadorSchema', jugadorSchema)