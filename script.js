/* =====================================
   START BIRTHDAY
===================================== */

function startBirthday() {

    const input = document.getElementById("nameInput");

    const name = input.value.trim();

    if (name === "") {

        alert("Pehle naam toh likho 😄");

        input.focus();

        return;
    }

    // Save name
    localStorage.setItem("birthdayName", name);

    // Go to birthday page
    window.location.href = "birthday.html";
}


/* =====================================
   BIRTHDAY PAGE
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const nameElement =
        document.getElementById("birthdayName");

    if (nameElement) {

        const savedName =
            localStorage.getItem("birthdayName");

        if (savedName) {

            nameElement.textContent =
                savedName;

        }

        createBalloons();

    }

});


/* =====================================
   BALLOONS
===================================== */

function createBalloons() {

    const container =
        document.getElementById("balloons");

    if (!container) return;

    const colors = [
        "#ff4d6d",
        "#ffbe0b",
        "#3a86ff",
        "#8338ec",
        "#06d6a0",
        "#fb5607",
        "#ff006e"
    ];

    for (let i = 0; i < 30; i++) {

        const balloon =
            document.createElement("div");

        balloon.classList.add("balloon");

        const size =
            Math.floor(Math.random() * 20) + 45;

        balloon.style.width =
            size + "px";

        balloon.style.height =
            size * 1.25 + "px";

        balloon.style.left =
            Math.random() * 100 + "%";

        balloon.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        balloon.style.animationDuration =
            Math.random() * 4 + 5 + "s";

        balloon.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(balloon);
    }
}


/* =====================================
   GO TO MOMO
===================================== */

function goToMomo() {

    window.location.href =
        "momo.html";

}