// function which toggles the sidebar
$(document).ready(function () {
  $(".slide-toggle").click(function () {
    $(".sidebar").animate({
      width: "toggle"
    });
  });
});

// function which animates the hamburger on user click
var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
});

// function validateForm() {
//   let first = document.forms["form"]["fname"].value;
//   let second = document.forms["form"]["sname"].value;
//   if (first == "" || second == "") {
//     alert("all fields are required");
//     return false;
//   }
// }

const form = document.querySelector('.whole-form');
const firstname = document.getElementById('firstname');
const secondname = document.getElementById('secondname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const bigmessage = document.getElementById('message');


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');


  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const secondnameValue = secondname.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const largeMessage = bigmessage.value.trim();
  const errorMessage = "Required Field";


  if (firstnameValue === '') {
    setError(firstname, `${errorMessage}`);
  } else {
    setSuccess(firstname);
  }

  if (secondnameValue === '') {
    setError(secondname, `${errorMessage}`);
  } else {
    setSuccess(secondname);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (subjectValue === '') {
    setError(subject, `${errorMessage}`);
  } else {
    setSuccess(subject);
  }
  if (largeMessage === '') {
    setError(bigmessage, `${errorMessage}`);
  } else {
    setSuccess(bigmessage);
  }
};


var i = 0;
var txt = 'My name is Simon Hart'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("textTyping").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// $("document").on("pagecontainerload",function(){closeModal()}) ;

function closeModal() {
  let modal = document.getElementById('cookie-modal')
  modal.style.display = "none";
  modal.close()
}
function openModal() {

  let modal = document.getElementById('cookie-modal')
  modal.style.display = "block";
  modal.open()
}

