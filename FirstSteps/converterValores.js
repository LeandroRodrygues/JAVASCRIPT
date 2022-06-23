const prompt = require("prompt-sync")();

const real = prompt("Digite o valor em reais: ");

const cotacao = prompt("Digite o valor da cotação: ");

const valorConvertido = real / cotacao;

console.log("O valor da cotação é: " + valorConvertido);
