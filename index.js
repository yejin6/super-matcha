const product = document.querySelector("div.product img")
const objects = document.querySelectorAll("div.object")
const arrowDown = document.querySelector("div.arrow-down img")
const menu = document.querySelector("div.menu")
const navItem = document.querySelector("div.navbar-menu")

let moveDistance = -25;

product.addEventListener("mouseover", function(){
    let delay = 0.4;

    objects.forEach(object => {

        object.style.transform = `translateY(${moveDistance}px)`;
        object.style.transition = `transform ${delay}s ease`; 
        
        delay = delay + 0.3;
    });
    
})

product.addEventListener("mouseout", function(){
    let delay = 0.7;

    objects.forEach(object => {

        object.style.transform = `translateY(0px)`;
        object.style.transition = `transform ${delay}s ease`; 
        
        delay = delay + 0.5 ;
    });
    
})

arrowDown.addEventListener("mouseover", function(){
    arrowDown.style.transform = 'translateY(4px)';
})
arrowDown.addEventListener("mouseout", function(){
    arrowDown.style.transform = 'translateY(0px)';
})

menu.addEventListener("click", function(){
    navItem.classList.toggle("clicked")
})

