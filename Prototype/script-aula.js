function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade
}

Pessoa.prototype.andar = function(){
    return this.nome + "andou"
}

Pessoa.prototype.nadar = function(){
    return this.nome + "nadou"
}


const andre = new Pessoa ("Bruno", 26);

console.log(Pessoa.prototype)




const pais = "Brasil";

const cidade = new String("Rio");


console.log(pais.charAt(pais.length -1)) // metódo pra acessar o ultimo index da string brasil;

console.log(cidade.charAt(cidade.length -1));



const listaAnimais = ["cachorro", "gambá", "gato"]

const lista = document.querySelectorAll("li")


// transformar nodelist em array

const listaEmArray = Array.prototype.slice.call(lista);

const listaaRRAY = Array.from(lista);



//


//SEMPRE ENTENDA O QUE ESTÁ SENDO RETORNADO

const Carro = {
    marca: "Fiat",
    preco: 2000,
    andar(){
        return true
    },
}

// carro possui acesso às propriedas e métodos do objeto em questão.
//ex:

Carro.marca; //métodos da string que foi retornada;
Carro.preco //métodos do numero que foi retornado;
Carro.andar //métodos da função que foi retornada;
Carro.andar() //métodos do valor booleano (true or false) que foi retornada;
//Carro.andar.contructor.name// retorna que é uma função;
//Carro.andar().contructor.name// retorna que é um vlaor booleano;
//Carro.modelo.contructor.name// retorna que é uma string;
//Carro.marca.contructor.name// retorna que é uma função;