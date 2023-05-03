const competicionController = {}
const competicionLiga = require('../models/competicionLiga')
const jugadorGoles = require('../models/jugadorGoles')

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
    const arrayTipos = Object.keys(req.body[arrayCompeticion[0]])
    const arrayJugadores = Object.keys(req.body[arrayCompeticion[0]][arrayTipos[0]].Jugadores);
    if (arrayCompeticion.includes('Liga')) {
        if (arrayTipos.includes('GOLEADORESHISTORICO')) {
            console.log('GOLEADORESHISTORICO')
        }
        if (arrayTipos.includes('PARTICIPACIONESHISTORICO')) {
            console.log('PARTICIPACIONESHISTORICO')
        }
    }
    if (arrayCompeticion.includes('Torneo')) {
        console.log('Torneo')
    }
    const jugadores = [];
    for (let i = 0; i < arrayJugadores.length; i++) {
        const arrayKeysGoles = Object.keys(req.body.Liga.GOLEADORESHISTORICO.Jugadores[arrayJugadores[i]])
        const arrayGoles = []
        for (let j = 0; j < arrayKeysGoles.length - 1; j++) {
            const golesanio = { anio: arrayKeysGoles[j], numGoles: req.body.Liga.GOLEADORESHISTORICO.Jugadores[arrayJugadores[i]][arrayKeysGoles[j]] }
            arrayGoles.push(golesanio)
        }
        const newJugador = new jugadorGoles({
            nombre: arrayJugadores[i],
            goles: arrayGoles,
            total: req.body.Liga.GOLEADORESHISTORICO.Jugadores[arrayJugadores[i]][arrayKeysGoles[arrayKeysGoles.length - 1]]
        })
        jugadores.push(newJugador)
    }
    const responsefinal = new competicionLiga({
        nombre: arrayCompeticion[0],
        tipodatos: arrayTipos[0],
        Jugadores: jugadores
    })
    res.send(responsefinal)
    // await newJugador.save()
}
competicionController.updateJugador = async (req, res) => {
    const buscado = await competicionLiga.findByIdAndUpdate(req.params.id, req.body)
    res.send(buscado);
}

competicionController.deleteJugador = async (req, res) => {
    await competicionLiga.findByIdAndDelete(req.params.id)
    res.send('Jugador borrado');
}

module.exports = competicionController