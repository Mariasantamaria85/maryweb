// Función para mostrar/ocultar el menú al hacer clic en el icono de menú
function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
     
// función parallax

let text = document.getElementById('titulo');
let imgpara2 = document.getElementById('imgpara2');
let imgpara3 = document.getElementById('imgpara3');
let imgpara4 = document.getElementById('imgpara4');
let imgpara5 = document.getElementById('imgpara5');
let imgpara6 = document.getElementById('imgpara6');
let imgpara7 = document.getElementById('imgpara7');
let imgpara8 = document.getElementById('imgpara8');
let imgpara9 = document.getElementById('imgpara9');
let imgpara10 = document.getElementById('imgpara10');
let imgpara11 = document.getElementById('imgpara11');
let imgpara12 = document.getElementById('imgpara12');
let imgpara13 = document.getElementById('imgpara13');
let imgpara14 = document.getElementById('imgpara14');


window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginLeft = value * 2 + 'px';
  text.style.marginTop = value * -2 + 'px';
  imgpara3.style.marginTop = value * -2 + 'px';
  imgpara2.style.marginLeft = value * -2 + 'px';
  imgpara4.style.marginRight = value * -4 + 'px';
  imgpara5.style.marginRight = value * 4 + 'px';
  imgpara6.style.marginTop = value * 4 + 'px';
  imgpara7.style.marginBottom = value * -1.5 + 'px';
  imgpara8.style.marginRight = value * 2 + 'px';
  imgpara9.style.marginTop = value * 2 + 'px';
  imgpara10.style.marginBottom = value * 3 + 'px';
  imgpara11.style.marginBottom = value * 4 + 'px';
  imgpara12.style.marginTop = value * 2 + 'px';
  imgpara13.style.marginBottom = value * 2 + 'px';
  imgpara13.style.marginRight = value * 2 + 'px';
  imgpara14.style.marginTop = value * 2 + 'px';

});