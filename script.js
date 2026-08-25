// Navbar

const menu = document.getElementById("Navbar-Menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const setHeight = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`,
  );
};

setHeight();

window.addEventListener("resize", setHeight);
