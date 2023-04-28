const jugadoresController = {}
const jugador = require('../models/jugador')


jugadoresController.getJugadores = async (req,res) =>{
    const jugadores = await jugador.find()
    res.json(jugadores)
    
}
jugadoresController.getJugador = async (req,res) =>{
    const buscado = await jugador.findById(req.params.id)
    res.send(buscado);
}
jugadoresController.createJugador = async (req,res) =>{
    const newjugador = new jugador(req.body)
    await newjugador.save()
    res.send('jugador creado')
}
jugadoresController.updateJugador = async (req,res) =>{
    const buscado = await jugador.findByIdAndUpdate(req.params.id,req.body)
    res.send(buscado);
}

jugadoresController.deleteJugador = async (req,res) =>{
    await jugador.findByIdAndDelete(req.params.id)
    res.send('Jugador borrado');
}

module.exports = jugadoresController