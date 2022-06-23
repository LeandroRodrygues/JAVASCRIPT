const prompt = require("prompt-sync")();

const notas = [];

let media = 0;

for (let i = 0; i <= 2; i++){
    notas.push(Number(prompt(`Digite a ${i+1}º Nota: `)));
    media = Number(notas.reduce((acc, valor) => acc + valor, 0));    
}

console.log(`Sua média é ${media / notas.length}`);

