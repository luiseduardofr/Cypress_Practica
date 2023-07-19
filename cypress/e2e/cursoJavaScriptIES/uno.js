const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
prompt: 'hola> '
});

rl.prompt();

rl.on('line', (line) => {
    
      console.log(`hola '${line.trim()}'`);
      console.log("como te llamas ?");
})