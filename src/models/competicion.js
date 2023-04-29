const {Schema, model } = require('mongoose');


const competicionSchema = new Schema({
    nombre_competicion:{type:String,required:true},
    goleadores:[{
        jugadores:[{
            nombre:{type:String,required: true},
            goles:{
                anio:{type:Number},
                cantidad:{type:Number}
            },
            totalGoles:{type:Number}
        }]
    }],
    participaciones:[{
        jugadores:[{
            nombre:{type:String,required: true},
            participaciones:{
                anio:{type:Number},
                cantidad:{type:Number}
            },
            totalParticipaciones:{type:Number}
        }]
    }]
})
module.exports = model('Competicion', competicionSchema)