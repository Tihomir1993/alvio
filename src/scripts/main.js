window.addEventListener('load', (event) => {

  const mobileMenu = document.getElementById("mobile-button");
  const nav = document.querySelector(".navigation");


  mobileMenu.addEventListener('click', function (e) {

    let current = e.target.classList;

    if (current.contains("menu-open")) {
      current.remove("menu-open");
      nav.style.display = "block";
    } else {
      current.add("menu-open");
      nav.style.display = "none";
    }
  });

});