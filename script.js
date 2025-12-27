const correctPassword = "I love you";

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMsg");

    if (input === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("welcome").classList.remove("hidden");
    } else {
        error.textContent = "Wrong password. Try again.";
    }
}

function enterSite() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("site").classList.remove("hidden");

    music.play();
    playing = true;
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

let music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
    if (!playing) {
        music.play();
        playing = true;
    } else {
        music.pause();
        playing = false;
    }
}
