// const btn = document.querySelector('button')


// // function espera(texto) {
// //     console.log(texto)
// // }

// // setTimeout(espera, 0, 'Opa')


// // setTimeout(function () {
// //     console.log('oi')
// // }, 0)


// // o setTimeout ele espera todo o codigo que tá rodando até ele acabar pra jogar o que tá dentro dele

// // um setTimeout não espera o tempo do outro pra poder executar


// // for (let i = 0; i < 20; i++) {
// //     setTimeout(() => {
// //         console.log(i)
// //     }, 1000)
// // }


// // corrigindo o loop

// // for (let i = 0; i < 20; i++) {
// //     setTimeout(() => {
// //         console.log(i)
// //     }, 1000 * i)
// // }


// // this no setTimeout faz referencia ao window

// function handleClick(){
//     console.log(this) // faz referencia ao elemento em questão
// }

// function handleClick2(){
//     setTimeout(function (){
//         console.log(this)  // faz referencia ao window
//     }, 1000)
   
// }

// // arrow function usa o contexto de this da div pai (da onde tá puxando o callback)
// function handleClick3(){
//     setTimeout(()=> {
//         console.log(this)  // faz referencia ao window
//     }, 1000)
   
// }


// btn.addEventListener('click', handleClick)
// btn.addEventListener('click', handleClick2)
// btn.addEventListener('click', handleClick3)



//setInterval

//Ativa a função a cada tempo definido


function loop(texto){
    console.log(texto)
}

// let i = 0;
// setInterval(()=>{
//     console.log(i++)
// }, 1000)


// clearInterval(const) - parar o intervalo

// pra poder usar o clearInterval precisa por setInterval dentro de uma váriavel

let i = 0;
const intervalo = setInterval(()=>{
    console.log(i++)
    if(i > 5){
        clearInterval(intervalo);
    }
}, 1000)


