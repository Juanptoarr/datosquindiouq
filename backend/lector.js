const data = require('./archivos/Historico Goles y Participaciones.json') 
fetch('http://localhost:8000/api/jugadores', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => console.log(response.message))
  .catch(error => console.error(error));
