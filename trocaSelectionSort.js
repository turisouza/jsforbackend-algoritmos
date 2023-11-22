const livros = require("./listaLivros");
const menorValor = require("./menorValor");

function trocaSelection(lista, indice) {

    let menor = menorValor(lista, indice);

    let livroAtual = lista[indice];
    let livroMenorPreco = lista[menor];

    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;

}

module.exports = trocaSelection;