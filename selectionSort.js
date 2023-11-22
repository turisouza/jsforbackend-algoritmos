const livros = require("./listaLivros");
const trocaSelection = require("./trocaSelectionSort");

for (let atual = 0; atual < livros.length; atual++) {
    
    trocaSelection(livros, atual);
}

console.log(livros);