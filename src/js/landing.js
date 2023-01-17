/*function myFunction(x) { x.classList.toggle("change"); }*/

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