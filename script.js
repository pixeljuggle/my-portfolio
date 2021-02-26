function lightDark() {
  var main = document.body;
  main.classList.toggle("body-dark");
  
  var logo = document.getElementById('logo').src.includes("-dark");

  if (logo){
    document.getElementById('logo').src ='./assets/img/aw-logo.svg';
  }
  else {
    document.getElementById('logo').src ='./assets/img/aw-logo-dark.svg';
  }

var darkMode = document.getElementById('dark-mode').src.includes("-dark");

if (darkMode){
  document.getElementById('dark-mode').src ='./assets/img/aw-circle.svg';
}
else {
  document.getElementById('dark-mode').src ='./assets/img/aw-circle-dark.svg';
}

}