// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

function doLogin() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const error = document.getElementById("loginError");

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById("bgm").play();
  } else {
    error.classList.remove("hidden");
  }
}
