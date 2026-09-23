/* =========================================
   PAGE 1 → PAGE 2
========================================= */

function startBirthday() {

    const input = document.getElementById("nameInput");

    const name = input.value.trim();

    if (name === "") {

        alert("Pehle birthday person ka naam likho ❤️");

        input.focus();

        return;
    }

    /*
       Save name so it remains available
       on Page 2 and Page 3.
    */

    localStorage.setItem("birthdayName", name);

    /*
       Open actual second HTML page.
    */

    window.location.href = "birthday.html";
}


/* =========================================
   PAGE 2 → PAGE 3
========================================= */

function goToMomo() {

    window.location.href = "momo.html";
}


/* =========================================
   LOAD NAME
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const savedName =
        localStorage.getItem("birthdayName");

    /*
       Page 2
    */

    const birthdayName =
        document.getElementById("birthdayName");

    if (birthdayName && savedName) {

        birthdayName.textContent =
            savedName;
    }


    /*
       Page 3
    */

    const momoName =
        document.getElementById("momoName");

    if (momoName && savedName) {

        momoName.textContent =
            savedName;
    }

});


/* =========================================
   FINAL BUTTON
========================================= */

function finalSurprise() {

    const savedName =
        localStorage.getItem("birthdayName");

    const name =
        savedName || "Friend";

    alert(
        "🎂 Happy Birthday " +
        name +
        "! ❤️🐶🎉"
    );
}
