// Navbar scroll
const header = document.querySelector(".glass-nav");
window.onscroll = function() {
    if (window.scrollY >= 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
};

// Mobile menu
const navLinks = document.getElementById("links");
function Open_colose_Menu() {
    navLinks.classList.toggle("active");
}

// Read more buttons
const buttons = document.querySelectorAll(".read-more-btn");
buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        const moreText = this.previousElementSibling.querySelector(".text_more");
        if (moreText) {
            moreText.classList.toggle("show");
            this.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
        }
    });
});

// Theme toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggleInput = document.getElementById("themeToggle");
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        toggleInput.checked = true;
    }
    toggleInput.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});
