const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const fs = require('fs');

const rl = readline.createInterface({ input, output });

rl.question('Ingresa el nombre del archivo: ', (nombreArchivo) => {
  fs.readFile(nombreArchivo, 'utf8', (error, contenido) => {
    if (error) {
      console.error('Error al leer el archivo:', error);
      rl.close();
      return;
    }
    console.log('Contenido del archivo:', contenido);
    rl.close();
  });
});