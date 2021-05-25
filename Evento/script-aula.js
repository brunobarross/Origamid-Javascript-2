const img = document.querySelector('img');

img.addEventListener('click', clicou);

function clicou(event){
  console.log(event);
}


const animaisLista = document.querySelector('.animais-lista');

//animaisLista.addEventListener('click', callbackLista);

function callbackLista(event){
    console.log(event.currentTarget)
    console.log(event.target);
    console.log(event.type)
}

console.log(animaisLista)


// PREVENT DEFAULT

const linkExterno = document.querySelector(' a[href^="http"');

linkExterno.addEventListener('click', handleLinkExterno);

function handleLinkExterno(event){
  event.preventDefault();
  console.log(event);
}

// THIS
function handleLinkExterno(event){
  event.preventDefault();
  console.log(this);
}


// copy = WINDOW
window.addEventListener('copy', copiou);

function copiou(){
  console.log('copiou');
}


// TESTANDO OUTROS EVENTOS
/*const h1 = document.querySelector('h1');
h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);

function handleEvent(event){
  console.log(event.type, event);
}

*/


// KEYBOARD

// adiciona cor azul ao body

function handleKeyobard(event){
  if(event.key === 'a'){
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', handleKeyobard);

// foreach e eventos = adiciona evento a cada img do site

const imgs = document.querySelectorAll('img');

imgs.forEach((item) =>{
  console.log(item);
  img.addEventListener('click', handleImg);
})

function handleImg(event){
  console.log(event.currentTarget.getAttribute('src'));
}