const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Escribe: ', (entrada) => {
  console.log(`Has escrito: ${entrada}`);
  rl.close();
});