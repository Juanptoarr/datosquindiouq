const { Router } = require('express');
const router = Router();

const jugadoresController = require('../controllers/jugadores.controller')

router.get('/',jugadoresController.getJugadores)
router.post('/',jugadoresController.createJugador)
router.put('/:id',jugadoresController.updateJugador)
router.delete('/:id',jugadoresController.deleteJugador)
router.get('/:id',jugadoresController.getJugador)

module.exports = router;