// Definindo a string a ser invertida
const stringOriginal = "Hello, world!";

// Invertendo a string
let stringInvertida = "";
for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

// Exibindo a string invertida
console.log(stringInvertida);