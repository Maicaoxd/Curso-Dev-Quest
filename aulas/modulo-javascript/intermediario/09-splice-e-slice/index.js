let frutas = ["Banana", "Maçã", "Laranja", "Uva", "Morango"];

// SLICE (array.slice(x, y)): gera uma cópia do array pegando o item de posição x até o item de posição y, sendo que o item de posição y é excludente, ou seja, não é incluído nessa cópia. O array original permanece inalterado. Exemplo:

let frutasExtraidas = frutas.slice(1, 4); // Pega o item de posição 1 até o item de posição 3, sendo que o item de posição 3 é excludente, ou seja, não aparece. Sendo assim, pega os itens nas posições 1 e 2

console.log(frutasExtraidas); // Output: (3) ['Maçã', 'Laranja', 'Uva']

// Também podemos pegar todos os itens a partir de determinada posição. Exemplo:

frutasExtraidas = frutas.slice(2); // Pega todos os itens a partir da posição 2

console.log(frutasExtraidas); // Output: (3) ['Laranja', 'Uva', 'Morango']

// Agora, se dermos um console.log no array frutas, perceba que ele permanece inalterado:

console.log(frutas); // Output: (5) ['Banana', 'Maçã', 'Laranja', 'Uva', 'Morango']

// SPLICE (array.splice(a, b)): Diferente do slice, o qual apenas gera uma cópia e mantém o array original inalterado, o splice altera o array original. Sua finalidade é pegar b itens a partir da posição a do array. Exemplo:

let frutasSelecionadas = frutas.splice(1, 3); // Pega 3 itens a partir da (e incluindo) posição 1

console.log(frutasSelecionadas); // Output: (3) ['Maçã', 'Laranja', 'Uva']

// Se dermos um console.log no array frutas, perceba que agora só restaram os itens que não foram incluídos no splice:

console.log(frutas); // Output: (2) ['Banana', 'Morango']

// O splice também permite remover itens de um array e adicionar outros no lugar:

let cores = ["Azul", "Vermelho", "Amarelo", "Verde", "Laranja"];

console.log(cores);

let removeEAdicionaCores = cores.splice(3, 2, "Lilás", "Preto", "Branco");

console.log(removeEAdicionaCores); // Exibe os itens que foram removidos

console.log(cores); // Output: (6) ["Azul", "Vermelho", "Amarelo", "Lilás", "Preto", "Branco"];
