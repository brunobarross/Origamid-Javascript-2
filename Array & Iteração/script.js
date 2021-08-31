// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos); // sempre que é pra retornar array utilizamos o map, se fosse só loop poderia usar foreach


const objetoCurso = arrayCursos.map((curso)=>{
 const tituloCurso = curso.querySelector('h1').innerText;
 const descricaoCurso = curso.querySelector('p').innerText;
 const aulasCurso = curso.querySelector('.aulas').innerText;
 const horasCurso = curso.querySelector('.horas').innerText;

 return{
   titulo: tituloCurso,
   descricao: descricaoCurso,
   aulas: aulasCurso,
   horas: horasCurso,
 }

}) 


console.log(objetoCurso) // gerou uma array com 3 objetos contendo as propriedades criadas no map;




// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((numero)=>{
   return numero > 100;
})

console.log(maioresQue100);




// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((instrumento)=>{
  return instrumento === 'Baixo';
})


console.log(temBaixo);




// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, item)=>{
    const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');

    return acumulador + precoLimpo;

}, 0)

console.log(totalCompras)