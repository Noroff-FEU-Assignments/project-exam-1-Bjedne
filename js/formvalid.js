import {toggleMenu} from "./hamburger.js";

const form = document.querySelector(".contact-container")
const fullName = document.querySelector("#fullName")
const errorName = document.querySelector("#errorName")
const email = document.querySelector("#email")
const errorEmail = document.querySelector("#errorEmail")
const subject = document.querySelector("#subject")
const errorSubject = document.querySelector("#errorSubject")
const message = document.querySelector("#message")
const errorMessage = document.querySelector("#errorMessage")
let nameValid = false;
let emailValid = false;
let subjectValid = false;
let messageValid = false;

function validateForm() {
    if (checkLength(fullName.value, 5) === true) {
        errorName.style.display = "none";
        nameValid = true;
    } else {
        errorName.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        errorEmail.style.display = "none";
        emailValid = true;
    } else {
        errorEmail.style.display = "block";
    }

    if (checkLength(subject.value, 15) === true) {
        errorSubject.style.display = "none";
        subjectValid = true;
    } else {
        errorSubject.style.display = "block";
    }

    if (checkLength(message.value, 25) === true) {
        errorMessage.style.display = "none";
        messageValid = true;
    } else {
        errorMessage.style.display = "block"; 
    }
    if (nameValid && emailValid && subjectValid && messageValid) {
        alert("Message submitted. Thank you for contacting us!");
        form.reset();
    } else {
        event.preventDefault();
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

