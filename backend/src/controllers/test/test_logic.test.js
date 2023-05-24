const mongoose = require('mongoose');
const controller = require("../competicion.controller.js")
require('dotenv').config()
jest.setTimeout(30000)

beforeEach(async () => {
    try {
        await mongoose.connect(process.env.URL_CONNECT, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error);
    }
});
  
afterEach(async () => {
    try {
        await mongoose.connection.close();
    } catch (error) {
        console.log(error);
    }
});

test('Debería retornar un arreglo', async () => {
    const comp = await controller.getCompeticiones(null, { json: (elem) => console.log(elem) });
    const isArray = Array.isArray(comp)
    expect(isArray).toBe(true);
});

test('Debería retornar un arreglo que corresponda a goleadores historicos de la Liga', async () => {
    const comp = await controller.getCompeticionTipoDatos({ params: { competicion: "Liga", tipodatos: "GOLEADORESHISTORICO" } }, { json: (elem) => console.log(elem) });
    const isArray = Array.isArray(comp)
    expect(isArray).toBe(true);
});

test('Debería retornar un arreglo que corresponda a participaciones historicas de la Liga', async () => {
    const comp = await controller.getCompeticionTipoDatos({ params: { competicion: "Liga", tipodatos: "PARTICIPACIONESHISTORICO" } }, { json: (elem) => console.log(elem) });
    const isArray = Array.isArray(comp)
    expect(isArray).toBe(true);
});


test('Debería retornar un arreglo que corresponda a goleadores historicos de la Torneo', async () => {
    const comp = await controller.getCompeticionTipoDatos({ params: { competicion: "Torneo", tipodatos: "GOLEADORESHISTORICO" } }, { json: (elem) => console.log(elem) });
    const isArray = Array.isArray(comp)
    expect(isArray).toBe(true);
});

test('Debería retornar un arreglo que corresponda a participaciones historicas de la Torneo', async () => {
    const comp = await controller.getCompeticionTipoDatos({ params: { competicion: "Torneo", tipodatos: "PARTICIPACIONESHISTORICO" } }, { json: (elem) => console.log(elem) });
    const isArray = Array.isArray(comp)
    expect(isArray).toBe(true);
});

test('Obtener un jugador como un objeto Javascript', async() => {
    const player = await controller.getJugador({ params: { id: "64532ada07b72c40619de107" }}, { send: (elem) => console.log(elem) });
    const isObject = typeof player == 'object'
    expect(isObject).toBe(true);
})