document.addEventListener('DOMContentLoaded', function() {
  // Desktop menu
  var menuParentItems = document.querySelectorAll('.menu--desktop .menu__item--has-submenu');
  var childToggle = document.querySelectorAll('.menu--mobile .menu__child-toggle');

  if (menuParentItems.length) {
    Array.prototype.forEach.call(menuParentItems, function(el) {
      var childToggle = el.querySelector('.menu__child-toggle');

      // Handles hover over
      el.addEventListener('mouseover', function() {
        this.classList.add('menu__item--open');
        this.querySelector('a').setAttribute('aria-expanded', 'true');
        this.querySelector('button').setAttribute('aria-expanded', 'true');
      });

      // Handles hover out
      el.addEventListener('mouseout', function() {
        document.querySelector('.menu__item--open > a').setAttribute('aria-expanded', 'false');
        document.querySelector('.menu__item--open > button').setAttribute('aria-expanded', 'false');
        document.querySelector('.menu__item--open').classList.remove('menu__item--open');
      });

      // Handles toggle of submenus
      childToggle.addEventListener('click', function() {
        if (el.classList.contains('menu__item--open')) {
          el.classList.remove('menu__item--open');
          el.querySelector('a').setAttribute('aria-expanded', 'false');
          el.querySelector('button').setAttribute('aria-expanded', 'false');
        } else {
          el.classList.add('menu__item--open');
          el.querySelector('a').setAttribute('aria-expanded', 'true');
          el.querySelector('button').setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // For Mobile
  var hamburgerBtn = document.querySelector('.menu__hamburger-btn');
  var mobileMenus = document.querySelectorAll('nav.menu.menu--mobile');

  if (hamburgerBtn && mobileMenus.length) {
    hamburgerBtn.addEventListener('click', function() {
      Array.prototype.forEach.call(mobileMenus, function(mobileMenu) {
        mobileMenu.classList.toggle('menu--open');
      });
    });
  }

  // Mobile menu
  if (childToggle.length) {
    Array.prototype.forEach.call(childToggle, function(el) {
      el.addEventListener('click', function() {
        this.classList.toggle('menu__child-toggle--open');
        var parentItem = this.parentNode;
        if (parentItem.classList.contains('menu__item--open')) {
          parentItem.classList.remove('menu__item--open');
          parentItem.querySelector('a').setAttribute('aria-expanded', 'false');
          parentItem.querySelector('button').setAttribute('aria-expanded', 'false');
        } else {
          parentItem.classList.add('menu__item--open');
          parentItem.querySelector('a').setAttribute('aria-expanded', 'true');
          parentItem.querySelector('button').setAttribute('aria-expanded', 'true');
        }
      });
    });
  }


    // X icon
  var xIcon = document.querySelector('.x-icon');
  if (xIcon) {
    xIcon.addEventListener('click', function() {
      var mobileMenus = document.querySelectorAll('nav.menu.menu--mobile');
      if (mobileMenus.length) {
        mobileMenus.forEach(function(mobileMenu) {
          mobileMenu.classList.remove('menu--open');
        });
      }
    });
  }
// For the viewport greater than 766



// Function to remove the menu--open class when the viewport is greater than 766 pixels
function removeMenuOpenClass() {
const menuOpenElements = document.querySelectorAll('nav.menu.menu--mobile.menu--open');
if (window.innerWidth > 766) {
menuOpenElements.forEach(element => {
  element.classList.remove('menu--open');
});
}
}

// Initial call to remove the class in case the viewport is already greater than 766px on page load
removeMenuOpenClass();

// Add a resize event listener to remove the class when the viewport is resized
window.addEventListener('resize', removeMenuOpenClass);

//end of page loads listener //

});