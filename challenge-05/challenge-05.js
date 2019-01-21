/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 3, 6, 7, 10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var arr2 = [5, 1, 3, 4];
var num = 2;

function myFunction2(array, number) {
    return array[number];
}

console.log(myFunction2(arr2, num));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr3 = [25, 'Gustavo', true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(arr3, 0));
console.log(myFunction2(arr3, 1));
console.log(myFunction2(arr3, 2));
console.log(myFunction2(arr3, 3));
console.log(myFunction2(arr3, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName, option) {
    var livros = {
        'Senhor dos Aneis': {
            nome: 'Senhor dos Aneis',
            paginas: 300,
            autor: 'J. R. R. Tolkien',
            editora: 'Allen & Unwin'
        },
        'Harry Potter': {
            nome: 'Harry Potter',
            paginas: 211,
            autor: 'J. K. Rowling',
            editora: 'Pottermore Publishing'
        },
        'O Ladrão de Raios': {
            nome: 'O Ladrão de Raios',
            paginas: 400,
            autor: 'Rick Riordan',
            editora: 'Intrínseca'
        }
    };
    if (bookName === undefined) {
        return livros;
    } else if (bookName !== undefined && option === undefined) {
        return livros[bookName];
    }
    if (option !== undefined) {
        if (option === 'paginas') {
            return 'O livro ' + livros[bookName].nome + ' tem ' + livros[bookName].paginas + ' paginas!';
        } else if (option === 'autor') {
            return 'O autor do livro ' + livros[bookName].nome + ' é ' + livros[bookName].autor;
        } else if (option ==='editora') {
            return 'O livro ' + livros[bookName].nome + ' foi publicado pela editora ' + livros[bookName].editora + '.'
        }
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book('O Ladrão de Raios', 'paginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book('O Ladrão de Raios', 'autor');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book('Harry Potter', 'editora');
