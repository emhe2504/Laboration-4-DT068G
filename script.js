"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const submitButton = document.getElementById("send");
    if (submitButton) {
        submitButton.addEventListener("click", () => {

            const confirmation = document.getElementById("confirmation");
            confirmation.classList.remove("hidden");
        });
    }


    const closeButton = document.getElementById("close");
    if (closeButton) {
        closeButton.addEventListener("click", () => {

            window.location.href = "index.html";
        });
    }

    const cancelButton = document.getElementById("cancel");
    if (cancelButton) {
        cancelButton.addEventListener("click", () => {

            const cancellation = document.getElementById("cancellation");
            cancellation.classList.remove("hidden");
        });
    }

    const reportButton = document.getElementById("report-button");
    if (reportButton) {
        reportButton.addEventListener("click", () => {

            const reportConfirmation = document.getElementById("report-confirmation");
            reportConfirmation.classList.remove("hidden");
        });
    }

    const simpleTravel = document.getElementById("enkelresa");
    const returnTravel = document.getElementById("returresa");
    const returnTime = document.getElementById("hometime-li");

    if (simpleTravel && returnTravel) {

        simpleTravel.addEventListener("change", () => {
            if (simpleTravel.checked) {
                returnTime.classList.add("hidden");
            }

            const returnInfo = document.getElementById("return-info");

            returnInfo.innerHTML = ""
        });

        returnTravel.addEventListener("change", () => {
            if (returnTravel.checked) {
                returnTime.classList.remove("hidden");
            }

            const returnInfo = document.getElementById("return-info");

            returnInfo.innerHTML = "*Vid tillägg av returresa kommer returresan avgå från första resans destination och anlända vid första resans avrese-adress."
        });
    };

    const loginButton = document.getElementById("login-button");

    if (loginButton) {
        loginButton.addEventListener("click", () => {

            const loginConfirmation = document.getElementById("login-confirmation");
            loginConfirmation.innerHTML = "Du loggas nu in. Var god vänta. (Detta händer ej då det är en prototyp)"
        });
    }

});