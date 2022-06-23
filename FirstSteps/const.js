const nome = "Leandro" ; // Variável declarada com o const não pode ter seu valor alterado

function verificaNome(nome){
    return !! (nome);
}

verificaNome(nome) ? console.log("Verdadeiro") : console.log("Falso");

