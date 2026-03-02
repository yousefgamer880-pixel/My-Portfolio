let header = document.querySelector("header");

window.onscroll = function() { 
    if (window.scrollY >= 50) {
        header.classList.add("active");{
   
    
    
        }
    }
     else {
        header.classList.remove("active");
    }
};
let nav_links = document.getElementById("links")

function Open_colose_Menu(){
    nav_links.classList.toggle("active");
}

const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        const moreText = this.previousElementSibling.querySelector(".text_more");
        moreText.classList.toggle("show");

        this.textContent = moreText.classList.contains("show")
            ? "Read Less"
            : "Read More";
    });
});

// dark mode

document.addEventListener("DOMContentLoaded", function() {

  const toggleInput = document.getElementById("themeToggle");

  // استرجاع الثيم المحفوظ
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleInput.checked = true; // نخلي السويتش متزامن
  }

  toggleInput.addEventListener("change", function () {

    if (this.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }

  });

});