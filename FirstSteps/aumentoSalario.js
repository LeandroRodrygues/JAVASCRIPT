const prompt = require("prompt-sync")();

const salario = prompt("Digite o salario: ");

const taxa = prompt("Digite a taxa: ");

const salarioTotal = salario * (taxa / 100 + 1);

console.log(`O salário R$ ${salario} acrescido de ${taxa}% fica no total de R$ ${salarioTotal}`);