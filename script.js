

const menu= document.querySelector(".menu-btn");
const nav = document.querySelector(".nav_bar");
const closed = document.querySelector(".x-btn");

if (menu && nav && closed){
    menu.addEventListener("click", () =>{
        nav.classList.add("visible")
    })
    closed.addEventListener("click", () =>{
        nav.classList.remove("visible")
    })
}

else{
    console.log("no se encontro el elemento")
}