"use strict";

window.addEventListener('load', function (event) {
  var mobileMenu = document.getElementById("mobile-button");
  var nav = document.querySelector(".navigation");
  mobileMenu.addEventListener('click', function (e) {
    var current = e.target.classList;

    if (current.contains("menu-open")) {
      current.remove("menu-open");
      nav.style.display = "block";
    } else {
      current.add("menu-open");
      nav.style.display = "none";
    }
  });
});