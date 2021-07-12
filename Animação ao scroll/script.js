function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');

  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if ((tabMenu.length) && (tabContent.length)) {

    tabContent[0].classList.add('ativo')


    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove('ativo');
      })

      tabContent[index].classList.add('ativo');
    }


    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index);
      })
    })

  }

}



initTabNav();

function initAccordion() {
  const accordionLista = document.querySelectorAll('.js-accordion dt');

  // caso não queiera repetir a string ativo ->

  const ativo = 'ativo';

  //verifica se accordion lista existe

  if (accordionLista.length) {
    accordionLista[0].classList.add(ativo);
    accordionLista[0].nextElementSibling.classList.add(ativo);

    accordionLista.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })

    function activeAccordion(event) {
      this.classList.toggle(ativo)
      this.nextElementSibling.classList.toggle(ativo);


    }

  }


}

initAccordion()


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#');

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })

  function scrollToSection(event) {
    event.preventDefault();

    // pega atributo do elemento clicado
    const href = event.currentTarget.getAttribute('href');

    // pego as seções ancoradas
    const section = document.querySelector(href);


    // com esse não precisa ver a distancia do elemento pro topo, pois ele trás o elemento pra nossa visão

    // só pega no chrome e no Firefox
    section.scrollIntoView({
      //objeto
      behavior: 'smooth',
      block: 'start',
    });


    // para scrollar 

    /* forma alternativa não suportado no safari
  
      // distancia do elemento pro topo
    const topo = section.offSetTop;
  
  
    window.scrollTo({
      top: 1000,
      behavior: "smooth", // comportamento
    })
  
    */


    console.log(href);
  }


}


initScrollSuave();




function animacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.6; // 60% da tela do usuário
  
    function animaScroll(){
     sections.forEach((section)=>{
       const sectionTop = section.getBoundingClientRect().top - windowMetade;
       // verifica se a posição da section é menor que 0
       if(sectionTop < 0){
         section.classList.add('ativo');
       } else {
         // se quiser reativar a animação quando subir
         section.classList.remove('ativo');
       }
     })
    }
    
  animaScroll();
  window.addEventListener('scroll', animaScroll);
  
  }
  
}

animacaoScroll();

