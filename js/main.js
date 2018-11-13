'use strict';

let toggleNavStatus = false;

let toggleNav = function() {
  let getMobileNav = document.querySelector('.mobile-nav');
  let getMobileNavUl = document.querySelector('.mobile-nav__items');
  let getMobileNavLinks = document.querySelectorAll('.mobile-nav__item');

  if (toggleNavStatus === false) {
    getMobileNav.style.height = '250px';
    getMobileNav.style.position = 'fixed';
    getMobileNav.style.zIndex = '1000';
    getMobileNav.style.top = '50px';

    let arrayLength = getMobileNavLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getMobileNavLinks[i].style.opacity = '1';
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getMobileNav.style.height = '0';
    getMobileNav.style.top = '0';
    getMobileNav.style.position = 'static';

    let arrayLength = getMobileNavLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getMobileNavLinks[i].style.opacity = '0';
    }
    toggleNavStatus = false;
  }
};
