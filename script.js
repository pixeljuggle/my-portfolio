
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-dark");
    document.getElementById("logo").src = "./assets/img/aw-logo-dark.svg";
    document.getElementById("dark-mode").src ="./assets/img/aw-circle-dark.svg";
  } else {
    setTheme("theme-light");
    document.getElementById("logo").src = "./assets/img/aw-logo.svg";
    document.getElementById("dark-mode").src = "./assets/img/aw-circle.svg";
  }
}

(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("logo").src = "./assets/img/aw-logo-dark.svg";
    document.getElementById("dark-mode").src ="./assets/img/aw-circle-dark.svg";
  } else {
    setTheme("theme-light");
    document.getElementById("logo").src = "./assets/img/aw-logo.svg";
    document.getElementById("dark-mode").src = "./assets/img/aw-circle.svg";
  }
})();
