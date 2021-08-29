const comida = 'pizza'; // string declarada

const agua = new String("Agua"); // objeto do constructor string

// LENGTH

comida.length;
frames.length;


const frase = 'A melhor comida';
console.log(frase[frase.length - 1]) // ultima letra;


// charat

console.log(frase.charAt(2));
console.log(frase.charAt(frase.length));

// concat

console.log(frase.concat('oi'));

/*return => A melhor comidaoi;*/

//include

const fruta = 'Maça';
const listaFrutas = 'Maca, Pera, Laranja'
console.log(listaFrutas.includes('Maca', 2));


//slice

const transacao1 = 'Depósito de cliente';
const saudacao = 'Bom dia'

console.log(transacao1.slice(0, -1));


// indexOf

console.log(fruta.indexOf('a')) // retorna a posição do primeiro a encontrado na string

console.log(fruta.lastIndexOf('a')); // retorna a posição do último a encontrado na string;


//padstart e padend

const preco = 'R$ 99,00';


console.log(preco.padStart(16, '.'));
console.log(preco.padEnd(16, '.'));

const listaPreco = ['R$99', 'R$1999', 'R$2999'];

listaPreco.forEach((valor) => {

    console.log(valor.padStart(10, '.'));
})


//string repeat

const metralhadora = 'ta';

console.log(metralhadora.repeat(5))


// string replace
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens)


let precoBlusa = 'R$ 1200,43';
precoBlusa = precoBlusa.replace(',', '.')

console.log(precoBlusa)


// split

const arrayLista = listaItens.split(', ');
console.log(arrayLista)


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';

const htmlArray = htmlText.split('div');

const novoHTML = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHTML);

//metódo de array Join

const frutasArray = ['Banana', 'Melancia', 'Laranja'];



//upperCase e lowerCase

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';


console.log(sexo1.toUpperCase() === 'Feminino'); // false


//trim, trimStart e trimEnd

const valor = '  R$ 23.00   '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'