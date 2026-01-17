"use strict"

document.addEventListener("DOMContentLoaded", () => {

    initPage();
});


function initPage() {
    useSubmitbutton();
    useClosebutton();
    useCancelbutton();
    useReportbutton();
    simpleOrReturn();
    useLoginbutton();
    awayMenu();
    clickMenu();
    clickAwayMenu();

    window.addEventListener("resize", awayMenu);
}

function useSubmitbutton() {

    const submitButton = document.getElementById("send");

    if (submitButton) {
        submitButton.addEventListener("click", () => {

            const confirmation = document.getElementById("confirmation");
            confirmation.classList.remove("hidden");
        });
    }
};

function useClosebutton() {

    const closeButton = document.getElementById("close");

    if (closeButton) {
        closeButton.addEventListener("click", () => {

            window.location.href = "index.html";
        });
    }

};

function useCancelbutton() {

    const cancelButton = document.getElementById("cancel");

    if (cancelButton) {
        cancelButton.addEventListener("click", () => {

            const youSure = document.getElementById("sure-cancellation");
            youSure.classList.remove("hidden");
        });
    }
    
    const sureYes = document.getElementById("sure-ja");
    const sureNo = document.getElementById("sure-nej");
    const youSure = document.getElementById("sure-cancellation");

    if (youSure) {

        sureYes.addEventListener("click", () => {

            const cancellation = document.getElementById("cancellation");
            youSure.classList.add("hidden");
            cancellation.classList.remove("hidden");
        });

        sureNo.addEventListener("click", () => {

            const youSure = document.getElementById("sure-cancellation");
            youSure.classList.add("hidden");
            window.location.href = "travels.html#trav8-text";
        });
    }
};

function useReportbutton() {

    const reportButton = document.getElementById("report-button");

    if (reportButton) {
        reportButton.addEventListener("click", () => {

            const reportConfirmation = document.getElementById("report-confirmation");
            reportConfirmation.classList.remove("hidden");
        });
    }

};

function simpleOrReturn() {

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

};

function useLoginbutton() {

    const loginButton = document.getElementById("login-button");

    if (loginButton) {
        loginButton.addEventListener("click", () => {

            const loginConfirmation = document.getElementById("login-confirmation");
            loginConfirmation.innerHTML = "Du loggas nu in. Var god vänta. (Detta händer ej då det är en prototyp)"
        });

    }

};


function awayMenu() {

    const menu = document.getElementById("menu-easy");
    const menuButton = document.getElementById("easy-button");

    if (window.innerWidth <= 950) {
        menu.classList.add("hidden");
        menuButton.classList.remove("hidden");

    } else {
        menu.classList.remove("hidden");
        menuButton.classList.add("hidden");
    }

};

function clickMenu() {

    const menu = document.getElementById("menu-easy");
    const menuButton = document.getElementById("easy-button");
    const closeMenu = document.getElementById("close-easy");

    menuButton.addEventListener("click", () => {

        if (menuButton.classList.contains("hidden") === false) {
            menu.classList.remove("hidden");
            closeMenu.classList.remove("hidden");

        }
    });

};

function clickAwayMenu() {

    const menu = document.getElementById("menu-easy");
    const closeMenu = document.getElementById("close-easy");

    closeMenu.addEventListener("click", () => {

        if (menu.classList.contains("hidden") === false) {
            menu.classList.add("hidden");
            closeMenu.classList.add("hidden");

        }
    });
};