// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [{
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Taxa Cliente',
        valor: 'R$ 49',
    },
];


// interar por cada item

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
    //limpar numero
    /* TROQUEI O VALOR $ POR UM VALOR VAZIO E O RESTO DA STRING FICOU SOMENTE O NÚMERO, E UTILIZANDO O + NA FRENTE DA STRING AGORA SEM LETRAS, A TRANSFORMEI EM UM NUMBER.*/
    const numeroLimpo = +item.valor.replace('R$', '');

    //verificar se item começa com taxa em descricao
    //se quiser só o inicio da string é melhor usar slice (0,4)
    if (item.descricao.slice(0, 4) === 'Taxa') {
        console.log('Encontrei Taxa')
        // inserir e somar valor dentro da variavel taxa total
        taxaTotal += numeroLimpo;

    } else if (item.descricao.slice(0, 4) === 'Rece') {
        recebimentoTotal += numeroLimpo;
    }

})


console.log(taxaTotal)
console.log(recebimentoTotal)





// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';


/* resposta*/

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes)




// Substitua todos os span's por a's
let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

/* resposta*/
html = html.split('span').join('a') // por ser uma array, posso usar métodos de array, no caso de join



// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
/* resposta*/
console.log(frase.charAt(frase.length - 1))
console.log(frase.slice(-1))
console.log(frase[frase.length - 1])




// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item)=>{
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0,4);
    console.log(item)
    if(item === 'taxa'){
    totalTaxas++
    }

})

console.log(totalTaxas);



