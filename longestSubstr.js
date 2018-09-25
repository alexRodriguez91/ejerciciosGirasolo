// nodeJS
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un string: ', str => {
  let buf = [],
      maxLenght = 1;

  for (let i = 0; i < str.length; i++) {
    for (j = i; j < str.length - i; j++) {
      if (!buf.includes(str[j])) {
        buf.push(str[j])
      } else {
        if (maxLenght < buf.length) {
          maxLenght = buf.length
          buf = []
        }
      }
    }
  }
  console.log(`El substring mas grande es: ${maxLenght}`)
  rl.close()
})
