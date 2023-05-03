const data = require('./archivos/Historico Goles y Participaciones.json') 
const jugadoresGolesLiga =data.Liga.GOLEADORESHISTORICO.Jugadores;
for (const campo in jugadoresGolesLiga) {
    for(const subcampo in jugadoresGolesLiga[campo]){
        console.log(campo + ": " + subcampo + ":" + jugadoresGolesLiga[campo][subcampo]);
    }
    
  }