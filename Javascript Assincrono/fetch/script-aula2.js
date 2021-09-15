
// blob - serve para pegar imagens, pois o javascript não lida bem com imagens e ouros arquivos que o js não consegue ler;



const blob = fetch('../fetch/img.png');

blob.then((resolucao)=>{
  return resolucao.blob();
}).then((body) =>{
  const blobUrl = URL.createObjectURL(body);
  const fotoDiv = document.querySelector('.foto');
  fotoDiv.src= blobUrl;

})


// headers - posso verificar o status da requisição e etc

const cep = fetch('https://viacep.com.br/ws/23067453/json/');

cep.then((resolucao)=>{
  console.log(resolucao.status)
  if(resolucao.status === 200){
    console.log('existe');
    console.log(resolucao.type);
  } else{
    console.log('nao existe')
  }

})


// se resolucao.type for basic = significa que estou pegando do meu servidor local

// se for cors significa que a requisição veio de outro servidor mas foi permitida

