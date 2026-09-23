function startBirthday() {

    const input = document.getElementById("nameInput");
    const name = input.value.trim();

    if (name === "") {
        alert("Pehle birthday person ka naam likho ❤️");
        return;
    }

    // Name second page par show karo
    document.getElementById("personName").textContent =
        "Dear " + name + " 💖";

    // First page hide
    document.querySelector(".home").style.display = "none";

    // Second page show
    document.getElementById("birthdayPage").style.display = "flex";

    // Balloons
    createBalloons();
}


function createBalloons() {

    const emojis = ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈"];

    emojis.forEach(function (emoji, index) {

        const balloon = document.createElement("div");

        balloon.className = "floating-balloon";

        balloon.textContent = emoji;

        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * 90 + "%";
        balloon.style.bottom = "-80px";
        balloon.style.fontSize = "45px";
        balloon.style.zIndex = "100";

        balloon.style.transition = "transform 5s linear";

        document.body.appendChild(balloon);

        setTimeout(function () {

            balloon.style.transform =
                "translateY(-120vh)";

        }, 100 + index * 200);
    });
}


function showNextSurprise() {

    alert("🎉 The next surprise is coming! 💖");

}
