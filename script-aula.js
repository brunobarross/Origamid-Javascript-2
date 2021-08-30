const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Kia' // muda o valor do indice 2
console.log(carros[2])

// Array from, transforma array like em array

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

// transformar objeto em array

const objeto = {
    0: 'Bruno',
    1: 'Barros',
    2: '26',
    length: 3, // necessário usar o length para informar o tamanho do array a ser criado
}

const arrayObjeto = Array.from(objeto)


// is Array - verifica se é array ou não

console.log(Array.isArray(li)) // retorna falso porque é um arrayLike


// métodos criar array

const arrayOf = Array.of(10)
console.log(arrayOf) // cria uma array de acordo com a quantidade de parametros desejados

const arrayNew = new Array(5) // criar uma array com 5 espaços vazios, para preencher precisa ter mais de uma argumento
console.log(arrayNew)


// length

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[0].length) // retorna 6, pois a propriedade é uma string e o tamanho da string é de 6 letras

console.log(frutas[1].length) // mesma coisa da Banana, sendo que retorna 4 por ser pêra

console.log(frutas[2].length) // retorna o tamanho da array inserida no indice 2 da array Frutas, e o tamanho da mesma é 2.

console.log(frutas[2][1].length) // Retorna o tamanho do segundo item dentro da array qye se encontra dentro da array frutas.


// Métodos que modificam a array


// sort - organizar os valores da array, nao consegue trabalhar bem com numeros 

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort()

console.log(instrumentos) //; organizado alfabeticamente

//sort não consegue por numero na ordem certa, pois ele vai de caracter em caracter


const idades = [132, 21, 33, 43, 1, 12, 8]

idades.sort()

console.log(idades)


//unshift e push


//unshift - adiciona elemento no inicio da array e retorna o novo tamanho da array em numero


const modeloCarros = ['Fiesta', 'Ferrari', 'Celta']

modeloCarros.unshift("Civic", 'Corsa', 'Fiorino')



//push adiciona no final da array

modeloCarros.push('Fusca', 'Herby')



//shift e Pop

//shift -  retira o primeiro item da array e retorna o elemento que ele removeu


//console.log(modeloCarros.shift());


//console.log(modeloCarros)


// pop - renove o ultimo item da array e retorna o elemento que ele removeu

//console.log(modeloCarros.pop());
//console.log(modeloCarros)


// Reverse- Inverte a ordem da array e retorna a nova ordem da array



//console.log(modeloCarros.reverse())


// splice - adiciona valor na array a partir do index desejado no primeiro parametro, remove a quantidade de itens desejados no segundo parametro e adiciona os valores desejados nos próximos parametros  - ele retorna os itens removidos também, se for 0 retorna vazia.

console.log(modeloCarros)

console.log(modeloCarros.splice(7, 1, 'Escort')) // a partir do item de index 7, ele removeu o 8 e adicionou 'Escort' ao lugar dele.

console.log(modeloCarros)

// copyWithin - [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso o

const copiarArray = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']


console.log(copiarArray)


//fill -preenche array com valor desejado do inicio até o fim, posso passar como parametro o valor desejado, a partir de qual index começar a preencher e até onde ele deve preencher.


const bolsa = ['chave', 'carteira', 'mascara', 'alcool']

console.log(bolsa.fill('Dinheiro', 1, 2));


// metódos de acesso - não modificam a array original, o que importa é o retorno do metódo

//concat - concatena arrays

const transportes1 = ['Van', 'Trem'];
const transportes2 = ['Ônibus', 'BRT'];

const transportes = transportes1.concat(transportes2);

console.log(transportes)

//concatenar em uma array vazia

const maisTransportes = [].concat(transportes1, transportes2, 'Bicileta', 'Van') // posso passar valores direto também
console.log(maisTransportes)



//includes - retorna se valor existe na array ou não - booleano
//indexOf - verifica se existe e retorna qual o index do elemento na array - obs: se tiver mais de um igual, ele retorna o primeiro.
//lastIndexOf - tem a função do indexOf, porém se tiver mais de um ele vai retornar o ultimo



console.log(maisTransportes.includes('Trem')) // tem trem

console.log(maisTransportes.indexOf('Van')) // retorna o index do primeiro van encontrado na array, se valor não existe ele retora -1;
console.log(maisTransportes.lastIndexOf('Van')) // retorna o index do ultimo van encontrado na array



//join - junta todos os valores da array e retorna uma string

// se o parametro de join for vazio, ele passa uma virgula por padrão

// se passar string vazia ele junta tudo



let htmlString = '<h2>Título Principal</h2>';

// cortar sempre que aparecer h2

htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString)



// slice - retorna os itens da array comoçando pelo valor de inicio até o final, de acordo com parametro

const linguagens = ['html', 'css', 'js', 'php', 'python'];

console.log(linguagens.slice(2, 4)) // retornou js e php

// clonar array com slice

console.log(linguagens.slice(2, 5))

const cloneLinguagens = linguagens.slice();

console.log(cloneLinguagens)

// retornar array basta por o slice sem parametro

console.log(linguagens.slice())