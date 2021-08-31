//FOREACH

/*const carros =['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array){
  console.log(item, index,array)
})

OU

carros.forEach((item, index,array)=>{

  console.log(item, index, array)
})


const li = document.querySelectorAll("li");

li.forEach((item => item.classList.add('ativa')));


 se modificar a array original ele modifica a array

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

console.log(carros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

*/

/*----------------------------------------------------*/

// MAP - FUNCIONA DA MESMA FORMA DO FOREAACH, A DIFERENÇA É QUE O FOREACH SEMPRE RETORNA UNDEFINED, E O MAP SEMPRE RETORNA A ARRAY e necessita de return para não retornar undefined

/*
const carros = ['Ford', 'Fiat', 'Honda'];

const arrayCarros = carros.map((item, index, array) => {

  return item.toLowerCase();
})

// a arrayCarros não tem relação nenhuma com a carros, pois gera uma array nova
console.log(arrayCarros)*/


/*Map serve para quando quer retornar uma array com os valores que tinha antes, modificados.


 exemplo de multiplicacao dos valores da array

const numeros = [2,4,5,6,7,78]

const numerosX2 = numeros.map(numero => numero *2); // se não tiver chave e tiver falando só de uma linha ele já retorna o valor sem precisar escrever return



console.log(numerosX2) */

/*----------------------------------------------------*/

// Map vs Foreach - sempre que você precisar de uma nova array a partir da anterior utiliza-se map, se precisar somente mudar classes, remover classes e etc, usa-se foreach.


/* Map com objetos

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

const nomeAulas = aulas.map(aula => aula.nome)

 é a mesma coisa que:
const nomeAulas = function(aula){
  return aula.nome;
}

// ou que:
const nomeAulas2 = aulas => aulas.nome;
const arrayNomeAulas = aulas.map(nomeAulas)
const arrayNomeAulas2 = aulas.map(nomeAulas2)
console.log(arrayNomeAulas2)


console.log(tempoAulas)
console.log(nomeAulas)

*/


/*----------------------------------------------------*/



// reduce - assim como o map, ele retorna valor porém tem um parametro especial, chamado acumulador, ele é apenas o resultado da interação anterior

const idades = [24,26,32];

const total = idades.reduce((acumulador, idade, index, array)=>{
    console.log(acumulador, idade, index, array);
    return acumulador + idade;
}, 0) // <--- quando o valor do acumulador é nulo, ele pula a primeira iteração/item.

console.log(total) // retorna 82


// maior valor com reduce

//acumulador == item anterior

const numeros = [10,25,30,1000,3,54,100];

const maiorNumero = numeros.reduce((anterior, atual)=>{
  if(anterior > atual){
    return anterior;
  } else{
    return atual;
  }
});


/* retornando outros valores, nesse caso objetos

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, aula, index)=>{
  acumulador[index] = aula.nome; //adiciona a propriedade nome ao objeto acumulador vazio que agora deixa de ser vazio e tem o valor do index da aula atual;
  console.log(acumulador)
  return acumulador; // retorno
}, {})

*/

// reduceright - começa a iterar da direita pra esquerda, enquanto o normal é o inverso.

/*----------------------------------------------------*/


//Some - verifica se pelo um return da iteração for verdadeiro, ele retorna true

// uma função que não retornada nada retorna undefined e é igual a false

const frutas = ['Banana', 'Uva', 'Caqui', ''];

const temCaqui = frutas.some((item, index, array)=>{
  return item === 'Caqui'
})

console.log(temCaqui) // retorna verdadeiro

/*----------------------------------------------------*/


// Every - verifica se todas as iterações retorna truthy(Verdadeiro), se uma única for falsa, ele retorna false.

// OBS: Se frutas tiver pelo menos uma string vazia, ele retorna falso

const every = frutas.every((fruta, index, array)=>{
  return fruta;
})

console.log(every)

//verificar se número é maior que 2

const numeros2 = [4,5,10,12,50,100]

const maiorQue2 = numeros.every((numero) =>{
return numero > 2;
});

console.log(maiorQue2); // retorna true

/*----------------------------------------------------*/


// find e findIndex

//findIndex - retorna o index do item cujo a condição seja verdadeira
//find - retorna o valor atual do item cujo a condição seja verdadeira


const indexUva = frutas.findIndex((fruta)=>{
    return fruta === 'Uva';

})

console.log(indexUva) // retorna o indice 1, pois é onde a uva se encontra;

const findUva = frutas.find((fruta)=>{
  return fruta === 'Uva';

})

console.log(findUva) // retorna 'Uva', pois uva foi encontrada.



/*----------------------------------------------------*/

//Filter - retorna uma array com a lista de valores que durante a iteração retornaram verdadeiro, caso só tenha valor null, undefined, false e 0 ele retorna uma array vazia.


const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const osVerdadeiros = frutas2.filter((fruta)=>{
  return fruta;
})

console.log(osVerdadeiros)

// pontos maior que 10

const pontos = [10,20,30,40,50]

const maiorQue10 = pontos.filter((ponto)=>{
  return ponto > 10;
})

console.log(maiorQue10)


// filter em objeto

// filtrar aulas maiores que 15 minutos

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const aulasLongas = aulas.filter((aula)=>{
  return aula.min > 15; // propriedade min dos objetos criados dentro da array aulas
})

console.log(aulasLongas);

