//array

var videoGames = ['Switch', 'PS5', 'Xbox', '3DS'];

// remover o ultimo item da lista e retorna ele

/*var ultimoItem = videoGames.pop();

// add item no final da lista

videoGames.push('GBA');

// tamanho da array

videoGames.length;
/*

//LOOP

//for

/*for (var numero = 1; numero <= 10; numero++){
  console.log(numero);
}

//while

var numero = 0;
while (numero < 100) {
  console.log(numero);
  numero = numero + 5;
  //numero++;
  //posso incrementar com mais do que 1

}

*/

// LOOPS COM ARRAYS


var videoGames = ['Switch', 'PS5', 'Xbox', '3DS'];

for( var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  // acessar e mostrar qual o item da lista em ordem
  if (videoGames[item] === 'PS5'){
    //break = o loop para caso encontre a palavra break
    break;
  }
}

videoGames.forEach(function(item){
  console.log(item)
})


var frutas = ['Banana', 'Pera', 'abacaxi', 'uva'];

frutas.forEach(function(item, index){
  console.log(item, index);
})


frutas.forEach(function(fruta, index, array){
  console.log(fruta, index, array);
})




