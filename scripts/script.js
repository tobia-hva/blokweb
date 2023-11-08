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
    var audio = new Audio('./sounds/kk-slider-bubblegum.mp3');
    audio.play();
}

buttonLiedje.addEventListener("click", liedjeAmiibo);
buttonLiedje.disabled = false;


/////////////////////////////

//scroll animatie //

/////////////////////////////
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('image-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.image');
  viewbox.forEach(image => {
    observer.observe(image);
  });


/////////////////////////////

//thema knop //

/////////////////////////////
var switchKerstButton = document.querySelector('.kerstSwitch');

var normaalButton = document.querySelector ('.normaalSwitch');

var kerstThema = document.querySelector('.bannerChristmas');

var kerstBorder1 = document.querySelector('.animal-crossing-news-1-kerst')

var kerstBorder2 = document.querySelector('.animal-crossing-news-2-kerst')

var kerstBorder3 = document.querySelector('.animal-crossing-news-3-kerst')


kerstThema.classList.add('hidden');
kerstBorder1.classList.add('hidden');
kerstBorder2.classList.add('hidden');
kerstBorder3.classList.add('hidden');

function activeKerst() {
    kerstThema.classList.remove('hidden');
    kerstBorder1.classList.remove('hidden');
    kerstBorder2.classList.remove('hidden');
    kerstBorder3.classList.remove('hidden');
    switchKerstButton.classList.add('hidden');
    normaalButton.classList.remove('hidden');
}

function activeNormaleLayout() {
    kerstThema.classList.add('hidden');
    kerstBorder1.classList.add('hidden');
    kerstBorder2.classList.add('hidden');
    kerstBorder3.classList.add('hidden');
    switchKerstButton.classList.remove('hidden');
    normaalButton.classList.add('hidden');
} 

switchKerstButton.addEventListener("click", activeKerst);
normaalButton.addEventListener("click", activeNormaleLayout);
 

/////////////////////////////

//verjaardag gedeelte eerste pagina//

/////////////////////////////

var characterBam = document.querySelector('.bam-birthday');

var previousButton = document.querySelector('.arrowLeft');

var nextButton = document.querySelector('.arrowRight2');

var characterPecan = document.querySelector('.pecan-birthday');

characterBam.classList.add('hidden');

function previousBirthday() {
    characterBam.classList.remove('hidden');
    characterPecan.classList.add('hidden');
}

function nextBirthday() {
    characterBam.classList.add('hidden');
    characterPecan.classList.remove('hidden');
} 

previousButton.addEventListener("click", previousBirthday);
nextButton.addEventListener("click", nextBirthday);
 
/////////////////////////////

//reduce motion//

/////////////////////////////

reducedMotionCheckbox.addEventListener("click", function() {
    var reducedMotionContainer = document.querySelector("body");
        reducedMotionContainer.classList.toggle("reduced-motion-active");
        console.log('reduced motion toggle');
});


/////////////////////////////

//reduce motion 2//

/////////////////////////////
