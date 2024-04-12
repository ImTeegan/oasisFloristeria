
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/styles.scss"



/*import 'slick-carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


$(document).ready(function () {
    var modal = $("#myModal");
    var modalImg = $("#modalImg");
    var closeBtn = $(".modal-img__close");

    $(".gallery__link-box__image").click(function () {
        modal.css("display", "flex");
        modalImg.attr("src", $(this).attr("src"));
    });


    closeBtn.click(function () {
        modal.css("display", "none");
    });

    $(window).click(function (event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    });
});

$(document).ready(function () {
    $("#change-title").click(function () {
        var newTitle = "Titulo cambiado";
        $("#title").text(newTitle);
    });
});

$("#slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});*/

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (this.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
    } else {
        headerMenu.classList.remove("on-scroll");
    }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
        }
    }
});