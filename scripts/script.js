// JavaScript Document
console.log("hi");

var menuButton = document.querySelector('.menu');

var kruisjeMenu = document.querySelector ('.closedMenu');

var uitgeklaptMenu = document.querySelector('nav');

 

uitgeklaptMenu.classList.add('hidden');



function openedMenu() {
    uitgeklaptMenu.classList.remove('hidden');
    menuButton.classList.add('hidden');
    kruisjeMenu.classList.remove('hidden');

}

function closedMenu() {
    uitgeklaptMenu.classList.add('hidden');
    menuButton.classList.remove('hidden');
    kruisjeMenu.classList.add('hidden');
} 

menuButton.addEventListener("click", openedMenu);
kruisjeMenu.addEventListener("click", closedMenu);
 



/////////////////////////////

//GELUID VOOR DE LIEDJES //

/////////////////////////////
var buttonLiedje = document.querySelector('.amiibo button');

function liedjeAmiibo(){
    console.log('Button clicked');
    var audio = new Audio('./images/kk-slider-bubblegum.mp3');
    audio.play();
}

buttonLiedje.addEventListener("click", liedjeAmiibo);
buttonLiedje.disabled = false;


