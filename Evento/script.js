


// QUANDO O USUÁRIO CLICAR NOS LINKS INTERNOS DO SITE
// ADICIONE A CLASSE ATIVO AO ITEM CLICADO E REMOVA 
// DOS DEMAIS ITENS CASO ELES POSSUEM A MESMA
// PREVINA O COMPORTAMENTO PADRÃO DOS LINKS
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) =>{
  link.addEventListener('click', addCLasse);
});

function addCLasse(event){
  event.preventDefault();
  // LOOP PARA REMOVER DE CADA ITEM A CLASSE ATIVO
  linksInternos.forEach((link)=>{
    link.classList.remove('ativo');
  })
  // ADICIONA A CLASSE ATIVO
  event.currentTarget.classList.add('ativo');

}




// selecione todos os elementos a partir do body
// ao clicar mostre exatamentos quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('*');

window.addEventListener('click', mostraClique);

function mostraClique(event){
  event.preventDefault();
    console.log(event.target);
}


// utilizando o código anterior, ao invés de mostrar no console, remova os itens clicados, utilize remove() para remover um elemento da array like ou array.

const todosElementos2 = document.querySelectorAll('body *');

todosElementos2.forEach((elemento) =>{
  elemento.addEventListener('click', removeElementos);
})

function removeElementos(event){
  event.currentTarget.remove();
}


// se o usuário clicar em T o texto inteiro do site aumenta

function clicouNoT (event) {
  if(event.key === 't'){
    document.documentElement.classList.toggle('aumenta');
}

}

window.addEventListener('keydown', clicouNoT);


// falar com o HTML = document.documentElement

