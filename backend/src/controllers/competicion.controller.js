const competicionController = {}
const competicion = require('../models/competicion')
const jugadorGoles = require('../models/jugador')

competicionController.getCompeticiones = async (req, res) => {

    //const results = await competicion.find()
    res.status(200).end('HOLA MUNDO');
}
competicionController.getJugador = async (req, res) => {
    const buscado = await competicion.findById(req.params.id)
    res.send(buscado);
}
competicionController.createJugador = async (req, res) => {
    const arrayCompeticion = Object.keys(req.body);
    for (let i = 0; i < arrayCompeticion.length; i++) {
        const arrayTipos = Object.keys(req.body[arrayCompeticion[i]])
        for (let j = 0; j < arrayTipos.length; j++) {
            const arrayJugadores = Object.keys(req.body[arrayCompeticion[i]][arrayTipos[j]].Jugadores);
            const jugadores = [];
            for (let k = 0; k < arrayJugadores.length; k++) {
                const arrayKeysContador = Object.keys(req.body[arrayCompeticion[i]][arrayTipos[j]].Jugadores[arrayJugadores[k]])
                const arrayContador = []
                for (let l = 0; l < arrayKeysContador.length - 1; l++) {
                    const contadoranio = { anio: arrayKeysContador[l], num: req.body[arrayCompeticion[i]][arrayTipos[j]].Jugadores[arrayJugadores[k]][arrayKeysContador[l]] }
                    arrayContador.push(contadoranio)
                }
                const newJugador = new jugadorGoles({
                    nombre: arrayJugadores[k],
                    contador: arrayContador,
                    total: req.body[arrayCompeticion[i]][arrayTipos[j]].Jugadores[arrayJugadores[k]][arrayKeysContador[arrayKeysContador.length - 1]]
                })
                //REPITIENDO DATOS, TENER EN CUENTA PARA ENTREGAS FUTURAS
                newJugador.save()
                jugadores.push(newJugador)
            }
            const newCompeticion = new competicion({
                nombre: arrayCompeticion[i],
                tipodatos: arrayTipos[j],
                Jugadores: jugadores
            })
            await newCompeticion.save()
        }
    }
    
    res.send('Guardado exitosamente')
}
competicionController.updateJugador = async (req, res) => {
    const buscado = await competicion.findByIdAndUpdate(req.params.id, req.body)
    res.send(buscado);
}

competicionController.deleteJugador = async (req, res) => {
    await competicion.findByIdAndDelete(req.params.id)
    res.send('Competicion borrada');
}

module.exports = competicionController