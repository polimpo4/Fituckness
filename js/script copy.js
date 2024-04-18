function calcularIMC(peso, altura) {
    // Verifica se os valores são válidos
    if (peso <= 0 || altura <= 0) {
        return "Valores inválidos. Peso e altura devem ser positivos.";
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Classifica o IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    return `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`;
}

// Exemplo de uso:
const pesoEmKg = 70;
const alturaEmMetros = 1.75;
const resultado = calcularIMC(pesoEmKg, alturaEmMetros);
console.log(resultado);
