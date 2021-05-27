const listaAnimais = document.querySelector('.animais-lista');

// pegar o height do item contando com o scroll

const heightScroll = listaAnimais.scrollHeight;

console.log(heightScroll);

// height + padding (clientHeight);

// height + padding + border (offsetHeight)

// vale para width

const animaisTopo = listaAnimais.offsetTop;

// distancia do elemento ao topo da página;

console.log(animaisTopo);

const primeiroH2 = document.querySelector('h2');

const distanciaEsquerda = primeiroH2.offsetLeft;

console.log(distanciaEsquerda);



// método getBounding.rect :  exibe todas as dimenses do elemento em relação a tela

//rect.height : altura do elemento
//rect. width: largura do elemento
//rect.top : distancia entre o topo do elemento e o scroll


const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top);

// window.innerWidth: pego o tamanho da tela
// window.innerHeight: pego o tamanho da tela, incluindo o console ou scroll
// o mesmo vale para height, onde outterHeight soma a batrra de endereço 

//pageYOffset : distancia total do scroll horizontal
// pageXOffset: .......... vertical


// como verificar se elemento passou da tela

if(rect.top < 0){
    console.log('passou da tela');
}

// método ideal para detectar tamanho de tela é usar media querie em javascript com matchmedia()

const mobile = window.matchMedia('(max-width: 600px)');

if (mobile.matches) {
    console.log('tá no celular');

} else {
    console.log('tela maior que a do celular');
}


