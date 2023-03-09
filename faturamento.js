// Definindo o vetor com o faturamento diário
const faturamentoDiario = [1200, 1450, 800, 1300, 950, 0, 0, 1100, 1600, 1400, 900, 1200, 2000, 1751, 1230, 1000, 1350, 1600, 1800, 1220, 1400, 900, 1300, 1550, 1100, 1300, 800, 1050, 1200, 1400, 1650];

// Calculando o menor e o maior valor de faturamento diário
const menorFaturamento = Math.min(...faturamentoDiario);
const maiorFaturamento = Math.max(...faturamentoDiario);

// Calculando a média mensal de faturamento, desconsiderando os dias sem faturamento
const faturamentoTotal = faturamentoDiario.reduce((total, valor) => total + valor, 0);
const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0).length;
const mediaMensal = faturamentoTotal / diasComFaturamento;

// Calculando o número de dias em que o faturamento diário foi superior à média mensal
const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

// Exibindo os resultados
console.log("Menor faturamento diário: R$ " + menorFaturamento);
console.log("Maior faturamento diário: R$ " + maiorFaturamento);
console.log("Número de dias com faturamento acima da média: " + diasAcimaDaMedia);