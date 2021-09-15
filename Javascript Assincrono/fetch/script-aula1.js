
//o fetch faz uma requisição HTTP, precisa ter um servidor local rodando (xamp,mamp, live server)

const documento = fetch('../fetch/doc.txt'); //caminho do arquivo


documento.then((resolucao) =>{
  /*resolucao.text().then((body)=>{
    console.log(body)
  });*/
  return resolucao.text();
}).then((body)=>{
   const conteudo = document.querySelector('.conteudo');
   conteudo.innerText =  body;
});



// pegar CEP
const CEP = fetch('https://viacep.com.br/ws/23570000/json/');

CEP.then((resolucao)=>{
    return resolucao.json();
}).then((body)=>{
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.logradouro;
})



//text - corpo de um arquivo css, corpo um de arquivo html, formato de texto, mostrar o arquivo json como é


//pegar estilo css

const estilo = fetch('../fetch/style.css');

estilo.then((resolucao)=>{
  return resolucao.text();
}).then((body)=>{
  const conteudo = document.querySelector('.conteudo');
  const style = document.createElement('style');
  style.innerHTML = body;
  conteudo.appendChild(style);
});



// puxar HTML e transformar em texto

const sobre = fetch('../fetch/sobre.html');

sobre.then((resolucao)=>{
  return resolucao.text();
}).then((body=>{
  const div = document.querySelector('.conteudo');
  div.innerHTML = body;
}))


