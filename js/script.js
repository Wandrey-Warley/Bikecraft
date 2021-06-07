window.onload = () => {
  console.log("Script Start")

  
  // trocarLogoQualidade();
}

const logo = document.querySelector('.logoQualidade');
const valoresSobre = document.querySelector('.valores');
// const icone = document.querySelectorAll('.icone');
// const informacao_produtos = document.querySelector('.informacao_produtos')

icone.addEventListener('click', iconeHandleClick);


function trocarLogoQualidade() {

  // console.log(document.body.clientWidth);
  if (document.body.clientWidth <= 770) {
    // console.log("É mobile");
    logo.src = "./img/bikcraft-qualidade.svg";
  } else {
    // console.log("É tela widescreen")
    logo.src = "./img/Diagrama.svg";
  }

}

function pagSobreMobile () {
  if(document.body.clientWidth <= 770) {
    valoresSobre.classList.remove('grid-4');
    valoresSobre.classList.add('grid-8');
  } else {
    valoresSobre.classList.add('grid-4');
    valoresSobre.classList.remove('grid-8');
  }

}


// function iconeHandleClick() {
//   // icone.classList.add('display_none');
//   informacao_produtos.classList.toggle('display_none');
// }

  setInterval(() => {
    if(document.title === 'Bikecraft - Sobre' || document.title === 'Bikecraft') {
      trocarLogoQualidade();
    }
    if(document.title === 'Bikecraft - Sobre') {
      pagSobreMobile();
    }
  }, 500);

