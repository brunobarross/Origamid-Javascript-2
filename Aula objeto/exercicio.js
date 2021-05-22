var dados ={
  nome: 'Bruno',
  sobrenome: 'Barros',
}

dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}


var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;


var cachorro = {
  nome: 'Auau',
  raca: 'labrador',
  cor: 'preto',
  idade: 10, 
  latir: function(pessoa) {
    if(pessoa === 'homem'){
      return 'Latir';
    } else {
      return 'Fica quieto';
    }
  }
}

