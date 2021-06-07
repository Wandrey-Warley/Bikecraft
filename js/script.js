window.onload = () => {
  console.log("Script Start")

  
  trocarLogoQualidade();
}

const logo = document.querySelector('.logoQualidade');
const valoresSobre = document.querySelector('.valores');



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

  }

}

setInterval(() => {
  trocarLogoQualidade();
  pagSobreMobile();
}, 500);
