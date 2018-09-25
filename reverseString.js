// nodeJS
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un string: ', answer => {
  answer = answer.trim().split(' ').reverse().join(' ')
  console.log(`El string al revés es: ${answer}`)
  rl.close()
})
