window.onscroll = function () {
    fixedNavbar()
};

var el = document.querySelector("#home .model > img");
var header = document.querySelector("header");
var sticky = el.offsetTop - 20;

function fixedNavbar() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed");
    }
}