// // Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//     console.log(this.nome + ' andou');
//     }
//    }


function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(`${this.nome} andou`);
    }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const bruno = new Pessoa('Bruno', 25);
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);

console.log(bruno.andar())
console.log(maria.andar())
console.log(joao.andar())





// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elemento


function Dom(seletor){
    const listaElementos = document.querySelectorAll(seletor);
    this.elements = listaElementos;
    this.addClasse = function(classe){
        listaElementos.forEach((item)=>{
            item.classList.add(classe)
        })
    }

    this.removerClasse = function(classe){
        listaElementos.forEach((item)=>{
            item.classList.remove(classe)
        })
    }
    

}


const lista = new Dom('li');
const ul = new Dom('ul');

lista.addClasse('ativar');
ul.addClasse('ativar-ul')