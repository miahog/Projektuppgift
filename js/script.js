"use strict";

// Kontaktformulär som valideras i javascript

// Hämta element från DOM
const contactForm = document.querySelector("#contactForm");

//Hämta formulärets fält
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

//Hämta felmeddelanden
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

//Hämta meddelande när det lyckas
const successMessage = document.querySelector("#successMessage");

//Validerar formulärets inmatning
function validateForm() {
    //Om formuläret är giltigt
    let isValid = true;

    //Rensa felmeddelanden
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    successMessage.textContent = "";

    //Kontroll att namnfält inte är tomt
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Namn måste fyllas i.";
        isValid = false;
    }
    //Kontroll att e-postfält inte är tomt
    if (emailInput.value.trim() === "") {
        emailError.textContent = "E-post måste fyllas i.";
        isValid = false;
    }
    //Kontroll att meddelandefält innehåller minst 10 tecken
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Meddelandet måste innehålla minst 10 tecken.";
        isValid = false;
    }

    //Returnera resultat av valideringen
    return isValid;
}

//Bekrätelsemeddelande och tömmer formuläret
function sendMessage() {
    successMessage.textContent = "Tack för ditt meddelande! Vi återkommer till dig så snart som möjligt.";
    contactForm.reset();
}

//Eventlyssnare
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Formulär skickades");
    if (validateForm()) {
        sendMessage();
    }
});














