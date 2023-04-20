const {Schema, model } = require('mongoose');

const jugadorSchema = new Schema({
    nombre:{type:String,required: true},
    goles:{type: Number,require: true},
    fecha_vinculacion:{type: Date}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('Jugador', jugadorSchema)