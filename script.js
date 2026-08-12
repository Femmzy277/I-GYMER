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

// User-input
const form = document.querySelector(".contact-form");

const sendMessageBtn = document.getElementById("send message");

if (sendMessageBtn) {
  sendMessageBtn.onclick = function (event) {
    // Its prevent the page from refreshing
    event.preventDefault();

    const userInfo = {
      firstName: document.getElementById("first-name")?.value,
      lastName: document.getElementById("last-name")?.value,
      email: document.getElementById("email")?.value,
      phone: document.getElementById("phone")?.value,
      message: document.getElementById("message")?.value,
    };

    console.log(userInfo);

    form.submit();
  };
}
