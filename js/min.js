let header = document.querySelector("header");

window.onscroll = function() { 
    if (window.scrollY >= 50) {
        header.classList.add("active");{
    if (window.scrollY >= 620) 
        header.classList.remove("active");
    }
    if (window.scrollY >= 700) {
        header.classList.add("active");
    }
    if (window.scrollY >= 1380) {
        header.classList.remove("active");
    }
     if(window.scrollY >= 1600) {
        header.classList.add("active");
    }
    if(window.scrollY >= 2030) {
        header.classList.remove("active");
    }
    if(window.scrollY >= 2250) {
        header.classList.add("active");
    }
    if(window.scrollY >= 3950) {
        header.classList.remove("active");
    }
    if(window.scrollY >= 4000) {
        header.classList.add("active");
    }
    }
     else {
        header.classList.remove("active");
    }
};