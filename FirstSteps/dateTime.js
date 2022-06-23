const data = new Date();

// console.log(data.getDay());
// console.log(data.getDate()); 
// console.log(data.getFullYear()); 
// console.log(data.toDateString());
// console.log(data.toISOString());
// console.log(data.toLocaleDateString());
// console.log(data.toLocaleString());
// console.log(data.toLocaleTimeString());

const dataFormatada = data.toLocaleDateString(
    "pt-BR",
{
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
}
);

console.log(dataFormatada);

const horaFormatada = data.toLocaleTimeString("pt-BR",
{
    hour: "numeric",
    minute:"2-digit",
    second:"2-digit"
}
);

console.log(horaFormatada);






