/* =========================================
   PERSONAL DETAILS
========================================= */

const HER_NAME = "Madam Ji";
const YOUR_NAME = "Vaibhav";

/*
   Birthday date:
   Change this to her actual birthday.

   Example:
   August 25, 2026
*/
const birthdayDate = new Date("September 09, 2026 06:00:00").getTime();


/* =========================================
   NAME REPLACEMENT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("body *").forEach(element => {

        if (
            element.children.length === 0 &&
            element.textContent.includes("HER_NAME")
        ) {
            element.textContent =
                element.textContent.replaceAll("HER_NAME", HER_NAME);
        }

        if (
            element.children.length === 0 &&
            element.textContent.includes("YOUR_NAME")
        ) {
            element.textContent =
                element.textContent.replaceAll("YOUR_NAME", YOUR_NAME);
        }

    });

});


/* =========================================
   COUNTDOWN
========================================= */

function updateCountdown() {

    const now = new Date().getTime();

    let difference = birthdayDate - now;

    /*
       If birthday has passed, show next year's birthday.
    */

    if (difference < 0) {

        const currentYear = new Date().getFullYear();

        const nextBirthday =
            new Date(`August 25, ${currentYear + 1} 00:00:00`).getTime();

        difference = nextBirthday - now;

    }


    const days =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (difference % (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================================
   SCROLL
========================================= */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        ["❤️", "💕", "💖", "💗", "💓"][
            Math.floor(Math.random() * 5)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document
        .getElementById("hearts-container")
        .appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 700);


/* =========================================
   LOVE LETTER
========================================= */

let letterOpened = false;

const message = `
Happy Birthday, ${HER_NAME} ❤️

Today is your special day, and I just want you to know how special you are.

I hope this new year of your life brings you happiness, beautiful memories, success and countless reasons to smile.

Thank you for being such a wonderful person.

Keep smiling, keep shining and always stay the amazing person you are. 🌸

Happy Birthday once again! 🎂❤️

With love,
${YOUR_NAME}
`;


function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const text =
        document.getElementById("letterText");


    if (letterOpened) return;

    letterOpened = true;

    envelope.classList.add("open");

    let index = 0;

    function typeLetter() {

        if (index < message.length) {

            text.textContent += message[index];

            index++;

            setTimeout(typeLetter, 25);

        }

    }

    setTimeout(typeLetter, 700);

}


/* =========================================
   GIFT SURPRISE
========================================= */

let giftOpened = false;

function openGift() {

    if (giftOpened) return;

    giftOpened = true;

    const message =
        document.getElementById("surpriseMessage");

    message.classList.add("show");

    createConfetti();

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "❤️",
        "💕",
        "🎂",
        "🌸",
        "⭐"
    ];


    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 25) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";


        document.body.appendChild(confetti);


        const animation =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        2000 + Math.random() * 3000,

                    easing: "cubic-bezier(.2,.8,.3,1)"
                }

            );


        animation.onfinish = () => {
            confetti.remove();
        };

    }

}


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.textContent =
                    "🔊 Music On";

            })
            .catch(() => {

                alert(
                    "Please add your birthday.mp3 file inside the music folder."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.textContent =
            "🎵 Music";

    }

});