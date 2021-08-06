// const Dom  = {
//     seletor: 'li',
//     element (){
//         const elementoSelecionado = document.querySelector(this.seletor);
//         return elementoSelecionado; // retorna o elemento selecionado
//     }, // ou element: function(){}

//     ativar(){
//         const elementoSelecionado = this.element();
//         elementoSelecionado.classList.add('ativar'); //adiciona a classe ativar ao elemento li
//     }
// }



// // adicionar na li

// Dom.ativar();

// //quero ativar o ul

// Dom.seletor = 'ul';
// Dom.ativar();


//constructor pra reutilizar em outros seletores

function Dom (seletor) {
    this.element = function () {
        const elementoSelecionado = document.querySelector(seletor);
        return elementoSelecionado; // retorna o elemento selecionado
    }; // ou element: function(){}

    this.ativar = function(){
        const elementoSelecionado = this.element();
        elementoSelecionado.classList.add('ativar'); //adiciona a classe ativar ao elemento li
    };
}

// posso selecionar qualquer elemento do html com essa função

const li = new Dom('li');

const ul = new Dom('ul');

li.ativar();



