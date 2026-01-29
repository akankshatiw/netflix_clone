window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#000";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
