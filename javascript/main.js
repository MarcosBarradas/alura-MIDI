function tocaSom(idElementoAudio) {
 const elemento = document.querySelector(idElementoAudio);
 console.log(idElementoAudio)
 if(elemento && elemento.localName === 'audio'){ //localename mostra a propriedade de um objeto de evento. no firefox tu ve se botar document.querySelector(`.audios #som_tecla_pom`); todas as propriedade. nesse caso o localName mostra que tipo de tag é. AUDIO
    elemento.play();
 }
 else{console.log(`oxi`)}
}

const listaDeTeclas = document.querySelectorAll(`.teclado .tecla`);
const listaDeAudios = document.querySelectorAll(".audios audio");

for (let i = 0; i < listaDeTeclas.length; i++) {
  let idDoAudio = `#${listaDeAudios[i].id}`;
  const tecla = listaDeTeclas[i];
  tecla.onclick = () => tocaSom(idDoAudio); //usamos callback
  tecla.onkeydown = function (evento) {

    if (evento.code === `Space` || evento.code === `Enter`) {
      tecla.classList.add(`ativa`);
    }
  };

  tecla.onkeyup = () => tecla.classList.remove(`ativa`);
}
