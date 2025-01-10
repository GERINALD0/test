// 1 questão
let soma = 0
for (let i = 0; i <= 13; i++) {
    soma+=i
}

console.log(soma)

// 2 questão
function verificaFibonacci(numero) {
    let a = 0
    let b = 1
  
    if (numero === a || numero === b) {
      return `O número ${numero} pertence à sequência de Fibonacci.`
    }
  
    let proximo = a + b

    while (proximo <= numero) {
      if (proximo === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`
      }

      a = b
      b = proximo
      proximo = a + b
    }
  
    return `O número ${numero} NÃO pertence à sequência de Fibonacci.`
  }
  
const numero = 13
console.log(verificaFibonacci(numero))

// 3 questão
const faturamentoDiario = [
    { dia: 1, valor: 100.0 },
    { dia: 2, valor: 200.0 },
    { dia: 3, valor: 0.0 },
    { dia: 4, valor: 150.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 300.0 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 250.0 },
    { dia: 9, valor: 0.0 }
]
  
function calculaFaturamento(dados) {
    const diasComFaturamento = dados.filter(dia => dia.valor > 0)
  
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor))
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor))
  
    const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0)
    const mediaMensal = somaFaturamento / diasComFaturamento.length
  
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length
  
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia
    }
}
  
const resultado = calculaFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento: R$ ${resultado.menorValor.toFixed(2)}`)
console.log(`Maior valor de faturamento: R$ ${resultado.maiorValor.toFixed(2)}`)
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`)

// 4 questão
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

function calculaPercentuais(faturamento) {
    const faturamentoTotal = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0)
    
    const percentuais = {}
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2)
    }
    
    return { faturamentoTotal, percentuais }
}

const { faturamentoTotal, percentuais } = calculaPercentuais(faturamentoPorEstado)

console.log(`Faturamento Total: R$ ${faturamentoTotal.toFixed(2)}`)
console.log("Percentual de representação por estado:")

for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`)
}

// 5 questão
function inverteString(texto) {
    let textoInvertido = "";
  
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
  
    return textoInvertido;
  }
  
  const entrada = 'Gerinaldo'
  const stringInvertida = inverteString(entrada);
  
  console.log(`String original: "${entrada}"`)
  console.log(`String invertida: "${stringInvertida}"`)
  