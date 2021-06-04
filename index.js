function navslide(){
    var burger_ele = document.querySelector(".burger");
    var nav_ele = document.querySelector(".items");

    burger_ele.addEventListener("click", function(){
        document.querySelector(".items").style.transition = "transform 0.5s ease-in";
        nav_ele.classList.toggle("nav-active")
    })
}
navslide();