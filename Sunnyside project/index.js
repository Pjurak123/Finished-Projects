const burgerIcon = document.getElementById("open-menu");
const burgerMenu = document.getElementById("burger-menu");

burgerIcon.onclick = (e) => {
  if (burgerMenu.className.includes("closed")) {
    burgerMenu.className = burgerMenu.className.replace(" closed", "");
  } else {
    burgerMenu.className = burgerMenu.className + " closed";
  }
};
