(function () {
  let openButton = document.getElementsByClassName("hamburguer_button")[0];
  let closeButton = document.getElementsByClassName("close_button")[0];
  let navbar = document.getElementsByClassName("closed_navbar")[0];
  let opacity = document.getElementsByClassName("opacity")[0];

  openButton.addEventListener("click", () => {
    navbar.classList.toggle("open");
    opacity.classList.toggle("available");
  });
  closeButton.addEventListener("click", () => {
    navbar.classList.remove("open");
    opacity.classList.remove("available");
  });
  window.addEventListener("scroll", () => {
    navbar.classList.remove("open");
    opacity.classList.remove("available");
  });
})();
