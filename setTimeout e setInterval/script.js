// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse(){
    document.body.classList.toggle('active');
}


// setInterval(() => {
//     mudarClasse();
// }, 1000);



// Crie um cronometro utilizando o setInterval. Deve ser possível

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')
// iniciar, pausar e resetar (duplo clique no pausar).

let i = 0;
let timer;

function iniciarTempo(){
    timer = setInterval(() => {
       tempo.innerText = i++ 
    }, 100);
    iniciar.setAttribute('disabled', '')
}

function pausarTempo(){
    clearInterval(timer)
    iniciar.removeAttribute('disabled', '')
}


function resetarTempo(){
    tempo.innerText = 0;
    i = 0;
}


iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)