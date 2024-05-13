let bars = document.querySelector("#bars");
let menu = document.querySelector("#menu");

    bars.addEventListener("click" , () => {
        menu.classList.toggle("mobilemenu");
    });

    links.forEach((link)=>{
        link.addEventListener("click" , () =>{
            menu.classList.toggle("mobilemenu");
        });
    });

    let nav = document.querySelector("nav");
    let links = document.querySelector(".link");

    window.addEventListener("scroll", () =>{
     if(window.scrollY > 10){
        nav.classList.add("sticky");
     }   
     else{
        nav.classList.remove("sticky")
     }
    });

   