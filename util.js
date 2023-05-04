const json = require('./archivos/Historico Goles y Participaciones.json');

function eliminarRepetidos(arr) {
    return arr.filter((elemento, indice) => {
      return arr.indexOf(elemento) === indice;
    });
  }

function obtenerTablaPorHoja(hoja) { // PARTICIPACIONESHISTORICO // GOLEADORESHISTORICO
    const torneoGolesJugadores = json.Torneo[hoja].Jugadores;
    const ligaGolesJugadores = json.Liga[hoja].Jugadores;
    const femeninoGolesJugadores = json.Femenino[hoja].Jugadores;
    const copaGolesJugadores = json.Copa[hoja].Jugadores;

    const nombresRepetidos = []
    const nombres_torneoGolesJugadores = Object.keys(torneoGolesJugadores);
    const nombres_ligaGolesJugadores = Object.keys(ligaGolesJugadores);
    const nombres_femeninoGolesJugadores = Object.keys(femeninoGolesJugadores);
    const nombres_copaGolesJugadores = Object.keys(copaGolesJugadores);
    nombresRepetidos.push(...nombres_torneoGolesJugadores);
    nombresRepetidos.push(...nombres_ligaGolesJugadores);
    nombresRepetidos.push(...nombres_femeninoGolesJugadores);
    nombresRepetidos.push(...nombres_copaGolesJugadores);

    const filas = [];
    const todosNombres = eliminarRepetidos(nombresRepetidos);

    const object = {
        nombre: null,
        goles_torneo: null,
        goles_liga: null,
        goles_femenino: null,
        goles_copa: null,
        goles_total: null
    }

    // // PARTICIPACIONESHISTORICO // GOLEADORESHISTORICO
    const value = hoja == "PARTICIPACIONESHISTORICO" ? "Participaciones" : "Goleadores";
    const inicioTabla = `<table><thead><tr><th>Nombres</th><th>${value} torneo</th><th>${value} liga</th><th>${value} femenino</th><th>${value} copa</th><th>${value} total</th></tr>`;    
    const finalTabla = "</thead></table>";

    for(const nombre of todosNombres){
        object.nombre = nombre

        // TORNEO
        const golesTorneo = torneoGolesJugadores[nombre] || torneoGolesJugadores["1 " + nombre];
        if (golesTorneo) object.goles_torneo = golesTorneo.TOTAL;
        else object.goles_torneo = 0;

        // LIGA
        const golesLiga = ligaGolesJugadores[nombre] || ligaGolesJugadores["1 " + nombre];
        if (golesLiga) object.goles_liga = golesLiga.TOTAL;
        else object.goles_liga = 0;

        // FEMENINO
        const golesFemenino = femeninoGolesJugadores[nombre] || femeninoGolesJugadores["1 " + nombre];
        if (golesFemenino) object.goles_femenino = golesFemenino.TOTAL;
        else object.goles_femenino = 0;

        // COPA
        const golesCopa = copaGolesJugadores[nombre] || copaGolesJugadores["1 " + nombre];
        if (golesCopa) object.goles_copa = golesCopa.TOTAL;
        else object.goles_copa = 0;

        object.goles_total = object.goles_torneo + object.goles_liga + object.goles_femenino + object.goles_copa;

        const fila = `
            <tr>            
            <th>${object.nombre}</th>
            <th>${object.goles_torneo}</th>
            <th>${object.goles_liga}</th>
            <th>${object.goles_femenino}</th>
            <th>${object.goles_copa}</th>
            <th>${object.goles_total}</th>
            </tr>
        `

        filas.push(fila);
    }

    const tabla = `${inicioTabla}${filas}${finalTabla}`.split(",").join("")
    return tabla;
} 

module.exports = {obtenerTablaPorHoja}