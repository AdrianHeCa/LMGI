const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Introduce una temperatura(Ej: 25C, 62F): ', (temperatura) => {
    if (temperatura.charAt(temperatura.length - 1) == 'C') {
        temperatura = temperatura.slice(0, -1)
        farenheit = temperatura * 1.8 + 32
        console.log(`En Farenheit son ${farenheit}F`);
    } else {
        temperatura = temperatura.slice(0, -1)
        celsius = (temperatura - 32) / 1.8
        console.log(`En Celsius son ${celsius}C`);
    }
    rl.close();
});