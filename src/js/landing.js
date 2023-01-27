//Animate burger menu starts

//burger menu
const burger = document.querySelector(".burger");

const link = document.querySelectorAll(".link-sm");

//what happens when burger is clicked

burger.addEventListener("click", navControl)

//changing burger menu
function changeBurger(e){
           return setTimeout(function(){
               e.classList.toggle("change")}, 300);
    }

function navControl(){
//nav-sm for mobile
const navSm = document.querySelector(".nav-sm");

    function hideNav(e){
        if (e.classList.contains("change")) {
          navSm.style.transform = "translateX(100%)";
          navSm.style.display = "none"
        }
        else{
    navSm.style.transform = "translateX(0%)";
    navSm.style.display = "block";
    navSm.style.opacity = 1;
        }
    }
    return (changeBurger(burger),hideNav(burger));
}
//burger menu control end

//remove navigation when link is clicked
link.forEach(e =>{
e.addEventListener("click", function (){
    setTimeout(function(){
        e.parentElement.parentElement.parentElement.style.opacity = 0;
e.parentElement.parentElement.parentElement.style.display = "none";
e.parentElement.parentElement.parentElement.style.transform = "translateX(0%)";
changeBurger(burger);
    },300)
})
}
)


//carousel starts

var slideIndex = 0;
var slides = document.querySelectorAll('.slide');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var dots = document.querySelectorAll('.dot');

function showSlide(n) {
  slides[slideIndex].style.display = 'none';
    dots[slideIndex].classList.remove('active');
    slides[slideIndex].classList.remove('show');
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    showSlide(index);
  });
});

showSlide(0);

setInterval(function(){
    nextSlide();
}, 3000)

//carousel ends
