// function to set a given theme/color-scheme
setTheme("theme-light");
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();

function lightDark() {
  toggleTheme();

  var logo = document.getElementById("logo").src.includes("-dark");

  if (logo) {
    document.getElementById("logo").src = "./assets/img/aw-logo.svg";
  } else {
    document.getElementById("logo").src = "./assets/img/aw-logo-dark.svg";
  }

  var darkMode = document.getElementById("dark-mode").src.includes("-dark");

  if (darkMode) {
    document.getElementById("dark-mode").src = "./assets/img/aw-circle.svg";
  } else {
    document.getElementById("dark-mode").src =
      "./assets/img/aw-circle-dark.svg";
  }
}
