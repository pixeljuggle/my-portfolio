function submitForm (){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let chat = document.getElementById("chat").value;
  alert(`I dont know how to submit forms right now!
But when i do i will use this info:

 ${name}
 ${email}
 " ${chat} "`);
}

let reset = document.getElementById("reset");

reset.addEventListener("click", function (event) {
  var contactForm = document.getElementById("contact-me").elements;

  for (var i = 0; i < contactForm.length; i++) {
    if (contactForm[i].type != "submit" && contactForm[i].type != "reset") {
      contactForm[i].value = "";
    }
  }
});
