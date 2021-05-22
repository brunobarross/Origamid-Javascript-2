// DO NOTATION SET


var menu = {
  width: 800,
  height: 400,
  backgroundColor: '#000',
  metadeheight() {
    return this.height / 2;
  }
}
menu.backgroundColor = 'purple';
menu.color = '#fff';
menu.esconder = function(){
  console.log('escondi');
}
var bg = menu.backgroundColor;

// this faz referencia ao proprio objeto

// objeto tem acesso a váriavel criada fora dele

console.log(menu.hasOwnProperty('height'));

// hasownproperty verifica se há aquela propriedade no objeto e retorna true ou false