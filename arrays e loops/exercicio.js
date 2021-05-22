// 1

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for (var numero = 0; numero < brasilCampeao.length; numero++){
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[numero]}`);
}

// 2
var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melância'];

for(var i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if (frutas[i] === 'Pera'){
    break 
  }
}

var ultimaFruta = frutas[frutas.length - 1];