"use strict";
const navItems = document.querySelectorAll(".navigation__item");
const navLinks = document.querySelectorAll(".navigation__link");
const navBackground = document.querySelector(".navigation__background");
const navButton = document.querySelector(".navigation__button");
const navCheckbox = document.querySelector(".navigation__checkbox");
const navigationNav = document.querySelector(".navigation__nav");

// Popup overlay click close
// const popup = document.querySelector('.popup')
const popupContent = document.querySelector('.popup__content')
const openPopups = document.querySelectorAll('.open-popup')
const popupCloseBtn = document.querySelector('.popup__close')
const popupCloseBtn2 = document.querySelector('.close--popup')

// Control hamburger
const controlHamburger = function () {
  navButton.addEventListener("click", function () {
    if (navCheckbox.checked) {
      // Açılma varyasyonu
        closeOpenHamburger()
        navCheckbox.checked = true
    } else {
      // Kapanma Varyasyonu
      navBackground.style.transform = "scale(150)";
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

const closePopup = function(){
  const popup = popupContent.closest('.popup')
  popup.addEventListener('click', function(e){
      if(e.target === popup){
        popup.style.opacity = 0
        popup.style.visibility = "hidden"
      }
    })

    popupCloseBtn.addEventListener('click', function(){
      popup.style.opacity = 0
      popup.style.visibility = "hidden"
    })

    popupCloseBtn2.addEventListener('click', function(){
      popup.style.opacity = 0
      popup.style.visibility = "hidden"
    })
}

const resetPopup = function(){
  const popup = popupContent.closest('.popup')
  popup.style.opacity = 1
  popup.style.visibility = "visible"
}

const openPopupFunc = function(){
  openPopups.forEach(btn => {
    btn.addEventListener('click', function(){
      resetPopup()
    })
  })
}

const init = function(){
  controlHamburger();
  controlNavigate();
  closePopup();
  openPopupFunc()
}
init()