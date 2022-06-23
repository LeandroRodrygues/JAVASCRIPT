const prompt = require("prompt-sync")();

const peso = prompt("Digite o peso: ");

const altura = prompt("Digite sua altura: ");

const imc = Math.round(peso / (Math.pow(altura, 2)));


console.log(imc);