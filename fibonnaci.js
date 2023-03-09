// Recebe o número informado pelo usuário
const num = parseInt(prompt("Informe um número: "));

// Inicia a sequência de Fibonacci com os valores 0 e 1
let fibonacci = [0, 1];

// Calcula a sequência de Fibonacci até que o último número seja maior ou igual ao número informado pelo usuário
while (fibonacci[fibonacci.length - 1] < num) {
  const next_fibonacci = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(next_fibonacci);
}

// Verifica se o número informado pertence à sequência de Fibonacci
if (fibonacci.includes(num)) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}





