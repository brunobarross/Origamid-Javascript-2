var nome = 'Bruno';

var nomeMinusculo = nome.toLowerCase();

var  altura = 1.80.toFixed();


var dados = {
  nome: 'bruno',
  idade: 26,
  nascimento: function(){
    return this.idade - 2021;
  }
}



var btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
  btn.classList.add('ativo')
});

