const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const os = require('os');

fs.readdir('archivos', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const result = {}; // Objeto global para almacenar los datos de todas las hojas

  files.forEach(file => {
    const filePath = path.join('archivos', file);
    const workbook = xlsx.readFile(filePath);

    workbook.SheetNames.forEach(sheetName => {
      if (sheetName.toLowerCase() === 'general') {
        return;
      }

      const worksheet = workbook.Sheets[sheetName];
      const data = xlsx.utils.sheet_to_json(worksheet);

      const fileName = path.parse(file).name; // Obtener el nombre del archivo sin la extensión
      if (!result.hasOwnProperty(sheetName)) {
        result[sheetName] = {};
      }

      if (!result[sheetName].hasOwnProperty(fileName)) {
        result[sheetName][fileName] = { "Jugadores": {} };
      }

      data.forEach(row => {
        const nameColumns = Object.keys(row).filter(key => {
          return typeof row[key] === 'string' &&
            (key.toLowerCase().includes('nombre') || key.toLowerCase().includes('apellido'));
        });

        const nameValues = nameColumns.map(key => row[key]);
        const jugadorName = nameValues.join(' ');

        if (!result[sheetName][fileName]["Jugadores"].hasOwnProperty(jugadorName)) {
          result[sheetName][fileName]["Jugadores"][jugadorName] = {};
        }

        Object.keys(row).forEach(key => {
          if (!nameColumns.includes(key)) {
            result[sheetName][fileName]["Jugadores"][jugadorName][key] = row[key];
          }
        });
      });
    });
  });

  // Guardar el objeto 'result' en un archivo JSON con el nombre "historico.json"
  const jsonFileName = 'Historico.json';
  const jsonFilePath = path.join('archivos', jsonFileName);
  fs.writeFile(jsonFilePath, JSON.stringify(result, null, 2) + os.EOL, (err) => {
    if (err) {
      console.error(`Error al guardar el archivo \${jsonFileName}:`);
      console.error(err);
      return;
    }
    console.log(`Archivo \${jsonFileName} guardado correctamente`);
  });
});