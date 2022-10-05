// JavaScript Document

// var hamburgerKnop = document.querySelector("header button i");

var deFooter = document.querySelector("footer")

deFooter.addEventListener("click", verbergFooter)

function verbergFooter() {
    deFooter.classList.add("anders")
}

var deHamburger = document.querySelector("#hamburger");
var deHeader = document.querySelector("header nav");

deHamburger.addEventListener("click", openHamburger);

function openHamburger(){
        deHeader.classList.toggle("geopend");
        deHamburger.classList.toggle("hamburGeopend");
        console.log("het is geopend"); //test test test 123

}
