const { Router } = require('express');
const router = Router();

const jugadoresController = require('../controllers/competicion.controller')

router.get('/',jugadoresController.getCompeticiones)
router.get('/:competicion/:tipodatos',jugadoresController.getCompeticionTipoDatos)
router.get('/:competicion',jugadoresController.getCompeticionTipoDatos)
router.get('/',jugadoresController.getCompeticiones)
router.post('/',jugadoresController.createJugador)
router.put('/:id',jugadoresController.updateJugador)
router.delete('/:id',jugadoresController.deleteJugador)
router.get('/:id',jugadoresController.getJugador)

module.exports = router;