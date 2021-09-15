// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const botao = document.querySelector('button')
const inputCEP = document.querySelector('.inptCEP');
const retorno = document.querySelector('.retornoCEP');


botao.addEventListener("click", cliqueBotao);

function cliqueBotao(evento){
  evento.preventDefault(); // previno o padrão do botão
  const cep = inputCEP.value; // pégo o valor doo input
  buscaCEP(cep); //funcao que requisita o CEP e adiciona no p
}


function buscaCEP(cep){
  const apiCEP = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  apiCEP.then((resolucao)=>{
    return resolucao.text();
  }).then((body)=>{
    retorno.innerText = body;
  })
}



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const precoBTC = document.querySelector('.preco__btc');


function fetchBTC(){
  fetch('https://blockchain.info/ticker').then((response)=>{
    return response.json();
  }).then((bitcoinJson)=>{
    precoBTC.innerText = `R$ ${bitcoinJson.BRL.buy}`.replace('.' ,',');
  });
}


//setInterval(fetchBTC, 1000 * 10);

fetchBTC();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const botaoPiada = document.querySelector('.gera');
const textoPiada = document.querySelector('.piada__texto');

botaoPiada.addEventListener('click', puxarPiada);


function puxarPiada(){
  fetch('https://api.chucknorris.io/jokes/random').then((response =>{
    return response.json();
  })).then((piada)=>{
      textoPiada.innerText = piada.value;
  })
}





