// verificar distância da primeira imagem em relação ao topo
const primeiraImg = document.querySelector("img");

const distanciaTopo = primeiraImg.offsetTop;

console.log(distanciaTopo);

// retorne a soma da largura de todas as imagens

function somarImg () {
const todasImg = document.querySelectorAll('img');

//loop

let soma = 0;

todasImg.forEach((imagem) =>{
    soma = soma + imagem.offsetWidth;
})

console.log(soma);

}

// código não funciona pois o javascript carrega antes
// das imagens no site, para isso pode se usar onload

window.onload = function(){
    somarImg();
}


// se o browser for menor que 720 adicione a classe menu-mobile no menu

const tamanhoTela = window.matchMedia('(max-width: 720px)').matches;

if (tamanhoTela) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
} else {
    console.log('tela maior que mobile');
}

// verifique se os links da página possuem o minimo de tamanho/largura para telas
//utilizadas com o dedo (48px/48px)

const links = document.querySelectorAll('a');

links.forEach((link) =>{
    const larguraLink = link.offsetWidth;
    const alturaLink = link.offsetHeight;
    if(larguraLink >= 48 && alturaLink >= 48){
        console.log(link, 'tamanho ideal');
    } else {
        console.log(link, "erro");
    }
});