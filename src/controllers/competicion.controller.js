const competicionController = {}
const competicion = require('../models/competicion')


competicionController.getCompeticiones = async (req, res) => {
    const page = parseInt(req.query.page) || 1 // Si no se proporciona la página, la primera será por defecto
    const limit = 20; // El número de elementos por página
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Aquí debes obtener la lista completa de elementos desde la base de datos o desde otro lugar donde los estés almacenando
    const competicion = await competicion.find()
    res.json(jugadores)
    const results = {};

    if (endIndex < listaCompleta.length) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }
    results.totalElementos = competicion.length;
    results.elementos = competicion.slice(startIndex, endIndex);

    res.status(200).json(results);
}
competicionController.getJugador = async (req, res) => {
    const buscado = await competicion.findById(req.params.id)
    res.send(buscado);
}
competicionController.createJugador = async (req, res) => {
    const newjugador = new competicion(req.body)
    await newjugador.save()
    res.send('jugador creado')
}
competicionController.updateJugador = async (req, res) => {
    const buscado = await competicion.findByIdAndUpdate(req.params.id, req.body)
    res.send(buscado);
}

competicionController.deleteJugador = async (req, res) => {
    await competicion.findByIdAndDelete(req.params.id)
    res.send('Jugador borrado');
}

module.exports = competicionController