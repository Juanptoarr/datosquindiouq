const competicionController = {}
const competicionLiga = require('../models/competicionLiga')
const jugadorGoles = require('../models/jugador')

competicionController.getCompeticiones = async (req, res) => {

    const results = await competicionLiga.find()
    res.status(200).json(results);
}
competicionController.getJugador = async (req, res) => {
    const buscado = await competicionLiga.findById(req.params.id)
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
                jugadores.push(newJugador)
            }
            const competicion = new competicionLiga({
                nombre: arrayCompeticion[i],
                tipodatos: arrayTipos[j],
                Jugadores: jugadores
            })
            await competicion.save()
        }
    }
    
    res.send('Guardado exitosamente')
}
competicionController.updateJugador = async (req, res) => {
    const buscado = await competicionLiga.findByIdAndUpdate(req.params.id, req.body)
    res.send(buscado);
}

competicionController.deleteJugador = async (req, res) => {
    await competicionLiga.findByIdAndDelete(req.params.id)
    res.send('Competicion borrada');
}

module.exports = competicionController