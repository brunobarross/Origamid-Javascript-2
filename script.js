const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

const primeiroValor = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();

// Adicione 'Arroz' ao final da array

comidas.push('Arroz')

// Adicione 'Peixe' e 'Batata' ao início da array

comidas.unshift('Peixe', 'Batata')



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética

estudantes.sort()
// Inverta a ordem dos estudantes

estudantes.reverse()
// Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes('Joana')) // true
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')) // false


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

/* FORMA PADRÃO

html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li')
*/

/* FORMA SIMPLIFICADA */

html = html.split('section').join('ul').split('div').join('li')

console.log(html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
const carros2 = carros.slice();

carros.pop()

// salve a array original em outra variável

console.log(carros)
console.log(carros2)