// Importar las librerías necesarias
const xlsx = require('xlsx'); // Librería para manejar archivos Excel
const fs = require('fs'); // Librería para manejar archivos en el sistema de archivos
const path = require('path'); // Librería para manejar rutas de archivos
const os = require('os'); // Librería para obtener información del sistema operativo

// Ruta de la carpeta "archivos" en el sistema de archivos
const archivosPath = path.join(__dirname, '..', 'archivos');

// Leer el contenido de la carpeta "archivos"
fs.readdir(archivosPath, (err, files) => {
  if (err) { // Si ocurre un error al leer la carpeta
    console.error(err);
    return;
  }

  // Objeto global para almacenar los datos de todas las hojas
  const result = {};

  // Iterar sobre cada archivo en la carpeta "archivos"
  files.forEach(file => {
    // Si el archivo no tiene extensión .xlsx, omitir
    if (path.extname(file) !== '.xlsx') {
      return;
    }

    const filePath = path.join(archivosPath, file); // Obtener la ruta completa del archivo
    const workbook = xlsx.readFile(filePath); // Leer el archivo Excel y crear un objeto workbook

    // Iterar sobre cada hoja del archivo Excel
    workbook.SheetNames.forEach(sheetName => {
      // Si el nombre de la hoja es "General", omitir
      if (sheetName.toLowerCase() === 'general') {
        return;
      }

      const worksheet = workbook.Sheets[sheetName]; // Obtener la hoja correspondiente
      const data = xlsx.utils.sheet_to_json(worksheet); // Convertir la hoja en un objeto JSON

      const fileName = path.parse(file).name; // Obtener el nombre del archivo sin la extensión

      // Crear la estructura de objeto adecuada en "result" si no existe aún
      if (!result.hasOwnProperty(sheetName)) {
        result[sheetName] = {};
      }

      if (!result[sheetName].hasOwnProperty(fileName)) {
        result[sheetName][fileName] = { "Jugadores": {} };
      }

      // Iterar sobre cada fila de datos en la hoja
      data.forEach(row => {
        // Obtener las columnas que contienen el nombre y apellido del jugador
        const nameColumns = Object.keys(row).filter(key => {
          return typeof row[key] === 'string' &&
            (key.toLowerCase().includes('nombre') || key.toLowerCase().includes('apellido'));
        });

        // Obtener los valores de nombre y apellido del jugador
        const nameValues = nameColumns.map(key => row[key]);

        // Concatenar el nombre y apellido del jugador
        const jugadorName = nameValues.join(' ');

        // Crear la estructura de objeto adecuada en "result" si no existe aún
        if (!result[sheetName][fileName]["Jugadores"].hasOwnProperty(jugadorName)) {
          result[sheetName][fileName]["Jugadores"][jugadorName] = {};
        }

        // Iterar sobre cada columna de datos en la fila
        Object.keys(row).forEach(key => {
          // Si la columna contiene el nombre o apellido del jugador, omitir
          if (!nameColumns.includes(key)) {
            // Agregar la columna al objeto correspondiente del jugador
            result[sheetName][fileName]["Jugadores"][jugadorName][key] = row[key];
          }
        });
      });
    });
  });

  // Guardar el objeto "result" en un archivo JSON con el nombre "historico.json"
  const jsonFileName = 'Historico Goles y Participaciones.json';
  const jsonFilePath = path.join(archivosPath, jsonFileName);
  fs.writeFile(jsonFilePath, JSON.stringify(result,null, 2) + os.EOL, (err) => {
    if (err) {
      console.error(`Error al guardar el archivo \\${jsonFileName}:`);
      console.error(err);
      return;
    }
    console.log(`Archivo \\${jsonFileName} guardado correctamente`);
  });
});