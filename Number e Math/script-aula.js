/*isNan - Verifica se valor não é um número e retorna boleano*/

console.log(Number(isNaN));

console.log(Number.isNaN(4.5));


// isInteger - verifica se valor é inteiro ou float

console.log(Number.isInteger(4.5));


// ParseFloat - serve pra retornar um número a partir de uma string que comece com numero

console.log(parseFloat('323,232'));

//se tiver letra antes, é considerado NAN


// parseInt = retorna o valor inteiro aproximado


console.log(parseInt('1999,99'))
console.log(parseInt(1999.99))



// numero.toFixed - arredonda o número com base no totald e casas decimais passada como argumento

const preco = 2.99;
console.log(preco.toFixed());

const carro = 10.999;
console.log(+carro.toFixed());


// numero.toString - transforma o numero em string com base em radix


// toLocaleString (linguagem, options/objeto) - formata o valor de acordo comn a lingua e opções passadas

let valor = 48.49;

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(valor)



// Math - Objeto nativo do Javascript que possui métodos de expressçoes matemáticas comuns.

console.log(Math.PI)

//Math.abs() - transforma valor negativo em positivo

console.log(Math.abs(4-7))


// Math.ceil() arredonda o numero pro valor inteiro e sempre pra cima, enquanto floor é pra baixo

console.log(Math.ceil(5.557)); 

console.log(Math.floor(5.557));

//Math.round() arredonda de acordo com a matemática normal

console.log(Math.round(5.4))


//Math.max() retorna o maior numero

console.log(Math.max(5,10,15,20,100,200,150))

//Math.min() retorna o menor

//Math.random() retorna um numero aleatorio de 0 a 1

console.log(Math.random() * 100);

// gerar aleatorio inteiro

const aleatorio = Math.floor(Math.random() *10);
console.log(aleatorio)


// numero aleatorio entre um numero e outro

/* formula: Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; */

const cinquentaACem = Math.floor(Math.random() * (100 - 50 +1) + 50);
console.log(cinquentaACem);