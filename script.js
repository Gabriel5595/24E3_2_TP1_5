//TP 1.5
//Desenvolva uma função chamada encontrarProdutoPorNome que receba um array de objetos representando produtos, onde cada produto tem uma propriedade nome. A função deve retornar o primeiro produto que tenha o nome especificado. Utilize o método find para localizar o produto. Teste a função com um array de produtos e um nome de produto.

function encontrarProdutoPorNome(produtos, nome) {
    return produtos.find(function(produto) {
        return produto.nome === nome;
    });
}

const produtos = [
    { nome: "Laptop", preco: 1000 },
    { nome: "Tablet", preco: 400 },
    { nome: "Smartphone", preco: 1500 }
];

const resultado = encontrarProdutoPorNome(produtos, "Laptop");
console.log(resultado);