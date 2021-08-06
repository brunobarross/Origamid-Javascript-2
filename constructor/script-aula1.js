function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;  
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);



function Carro2(marca,precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

 const fiat = new Carro2('Fiat', 2500);