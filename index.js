const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const os = require('os');

fs.readdir('archivos', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join('archivos', file);
    const workbook = xlsx.readFile(filePath);

    const jsonData = {};

    workbook.SheetNames.forEach(sheetName => {
      // Ignorar hojas con el nombre 'general' (en mayúsculas o minúsculas)
      if (sheetName.toLowerCase() === 'general') {
        return;
      }

      const worksheet = workbook.Sheets[sheetName];
      const data = xlsx.utils.sheet_to_json(worksheet);

      // Buscar las columnas con formato de año 'YYYY'
      for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const keys = Object.keys(row);

        for (let j = 0; j < keys.length; j++) {
          const key = keys[j];
          const value = row[key];
        }
      }

      // Guardar la hoja en un objeto JSON con el mismo nombre de la hoja
      jsonData[sheetName] = data;
    });

    // Guardar el objeto JSON en un archivo con el nombre original del archivo Excel
    const jsonFileName = file.replace('.xlsx', '.json');
    const jsonFilePath = path.join('archivos', jsonFileName);
    fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2) + os.EOL, (err) => {
      if (err) {
        console.error(`Error al guardar el archivo \${jsonFileName}:`);
        console.error(err);
        return;
      }
      console.log(`Archivo \${jsonFileName} guardado correctamente`);
    });
  });
});