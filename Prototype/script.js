//exercicios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}


// Crie um método no protótipo que retorne
// o nome completo da pessoa

const bruno = new Pessoa("Bruno", "Barros", 26);

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(bruno.nomeCompleto());


// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(HTMLCollection.prototype);
console.log(NodeList.prototype);
console.log(Document.prototype);
console.log(Array.prototype);

// ou

console.log(Object.getOwnPropertyNames(NodeList));




// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; //HTMLLIElement
li.click; //function
li.innerText; //string
li.value; // number
li.hidden; // booleano
li.offsetLeft; //number
li.click(); //erro porque retorna NULL E UNDEFINED; o que importa é o que tá retornando e ela não me retorna nada.


// Qual o construtor do dado abaixo

li.hidden.constructor.name; // String


console.log(li.hidden.constructor.name.constructor); //