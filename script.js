"use strict";
const navItems = document.querySelectorAll(".navigation__item");
const navLinks = document.querySelectorAll(".navigation__link");
const navBackground = document.querySelector(".navigation__background");
const navButton = document.querySelector(".navigation__button");
const navCheckbox = document.querySelector(".navigation__checkbox");
const navigationNav = document.querySelector(".navigation__nav");

// Control hamburger
const controlHamburger = function () {
  navButton.addEventListener("click", function () {
    if (navCheckbox.checked) {
      // Açılma varyasyonu
        closeOpenHamburger()
    } else {
      // Kapanma Varyasyonu
      navBackground.style.transform = "scale(100)";
      navigationNav.style.opacity = 1;
      navigationNav.style.visibility = "visible";
    }
  });
};

// Close hamburger onclick
const controlNavigate = function () {
    navItems.forEach((item) => {
        const link = item.querySelector(".navigation__link");
        link.addEventListener('click', function(){
            closeOpenHamburger()
        })
    });
    navigationNav.addEventListener('click', function(){
        closeOpenHamburger()
    })
};

const closeOpenHamburger = function(check = true){
    navBackground.style.transform = "scale(0)";
    navigationNav.style.opacity = 0;
    navigationNav.style.visibility = "hidden";
    navCheckbox.checked = !check
}

const init = function(){
    controlHamburger();
    controlNavigate();
}
init()