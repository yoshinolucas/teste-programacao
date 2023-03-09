// Definindo o objeto com o faturamento mensal por estado
const faturamentoMensalPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  // Calculando o valor total mensal da distribuidora
  const valorTotalMensal = Object.values(faturamentoMensalPorEstado).reduce((total, valor) => total + valor, 0);
  
  // Calculando o percentual de representação de cada estado
  const percentualPorEstado = {};
  for (const estado in faturamentoMensalPorEstado) {
    const faturamento = faturamentoMensalPorEstado[estado];
    const percentual = (faturamento / valorTotalMensal) * 100;
    percentualPorEstado[estado] = percentual.toFixed(2);
  }
  
  // Exibindo os resultados
  console.log("Percentual de representação do faturamento mensal por estado:");
  for (const estado in percentualPorEstado) {
    const percentual = percentualPorEstado[estado];
    console.log(`${estado} – ${percentual}%`);
  }