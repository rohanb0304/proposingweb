/* ============================================================
   ROMANTIC PROPOSAL WEBSITE
   Pure Vanilla JavaScript
============================================================ */


/* ============================================================
   ❤️ EASY PERSONALIZATION
   CHANGE THESE VALUES FIRST
============================================================ */

const loveConfig = {

    // Her name
    herName: "Yamini",

    // Your name
    yourName: "YOUR NAME",

    // First meeting memory
    firstMeeting:
        "This is where you write the story of the first time we met. Tell her what you remember and why that moment stayed with you.",

    // Special memory
    specialMemory:
        "Write about that one conversation, evening, joke, call, or tiny moment that you still think about.",

    // Background music
    romanticSong: "romantic-song.mp3"

};


/* ============================================================
   ROMANTIC MESSAGE
============================================================ */

const romanticMessage =
    `I don't know exactly when it happened, but somewhere between our conversations, the laughs, the little moments, and simply getting to know you, you became someone really special to me.

Being around you makes ordinary days feel a little warmer. I love the way the smallest things about you can make me smile, and I love how naturally you became someone I look forward to talking to.

I don't want to make this sound like some perfect movie story. I just know that I care about you, I appreciate you, and I would genuinely love the chance to make many more beautiful memories with you. ❤️`;


/* ============================================================
   DOM REFERENCES
============================================================ */

const landingScreen =
    document.getElementById("landingScreen");

const openHeartButton =
    document.getElementById("openHeartButton");

const mainContent =
    document.getElementById("mainContent");

const romanticText =
    document.getElementById("romanticText");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicSource =
    document.getElementById("musicSource");

const musicButton =
    document.getElementById("musicButton");

const noButton =
    document.getElementById("noButton");

const yesButton =
    document.getElementById("yesButton");

const answerMessage =
    document.getElementById("answerMessage");

const celebrationOverlay =
    document.getElementById("celebrationOverlay");

const seeFinalMessageButton =
    document.getElementById("seeFinalMessageButton");

const finalMessage =
    document.getElementById("finalMessage");

const continueButton =
    document.getElementById("continueButton");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");

const heartsContainer =
    document.querySelector(".hearts-container");

const petalsContainer =
    document.querySelector(".petals-container");

const particlesContainer =
    document.querySelector(".background-particles");


/* ============================================================
   PERSONALIZATION
============================================================ */

function applyPersonalization() {

    document
        .querySelectorAll("[data-her-name]")
        .forEach(element => {
            element.textContent = loveConfig.herName;
        });


    document
        .querySelectorAll("[data-your-name]")
        .forEach(element => {
            element.textContent = loveConfig.yourName;
        });


    document
        .querySelectorAll('[data-memory="firstMeeting"]')
        .forEach(element => {
            element.textContent =
                loveConfig.firstMeeting;
        });


    document
        .querySelectorAll('[data-memory="specialMemory"]')
        .forEach(element => {
            element.textContent =
                loveConfig.specialMemory;
        });


    musicSource.src =
        loveConfig.romanticSong;

    backgroundMusic.load();


    document.title =
        `A Little Something For ${loveConfig.herName} 💗`;
}


/* ============================================================
   TYPEWRITER
============================================================ */

function typeWriter(element, text, speed = 18) {

    element.textContent = "";

    let index = 0;


    function writeCharacter() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);

            index++;

            setTimeout(
                writeCharacter,
                speed
            );

        }

    }


    writeCharacter();
}


/* ============================================================
   OPEN HEART
============================================================ */

let websiteOpened = false;


openHeartButton.addEventListener("click", () => {

    if (websiteOpened) {
        return;
    }

    websiteOpened = true;


    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        18
    );


    landingScreen.classList.add("opened");


    setTimeout(() => {

        mainContent.classList.remove("hidden");

        document.body.style.overflow = "auto";

        requestAnimationFrame(() => {

            const messageSection =
                document.getElementById("message");

            messageSection.scrollIntoView({
                behavior: "smooth"
            });

        });

        typeWriter(
            romanticText,
            romanticMessage,
            14
        );

        startAmbientEffects();

    }, 550);

});


/* ============================================================
   AMBIENT EFFECTS
============================================================ */

let ambientStarted = false;


function startAmbientEffects() {

    if (ambientStarted) {
        return;
    }

    ambientStarted = true;


    createBackgroundParticles(20);


    setInterval(() => {

        createFloatingHeart();

    }, 1500);


    setInterval(() => {

        createPetal();

    }, 1000);

}


/* ============================================================
   BACKGROUND PARTICLES
============================================================ */

function createBackgroundParticles(amount) {

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";


        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 12}s`;

        particle.style.animationDelay =
            `${Math.random() * 10}s`;


        particlesContainer.appendChild(
            particle
        );

    }

}


/* ============================================================
   FLOATING HEARTS
============================================================ */

function createFloatingHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    heart.style.left =
        `${Math.random() * 100}%`;


    heart.style.setProperty(
        "--size",
        `${12 + Math.random() * 20}px`
    );


    heart.style.setProperty(
        "--duration",
        `${6 + Math.random() * 5}s`
    );


    heart.style.opacity =
        `${0.2 + Math.random() * 0.4}`;


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


/* ============================================================
   PETALS
============================================================ */

function createPetal() {

    if (!petalsContainer) {
        return;
    }


    const petal =
        document.createElement("span");

    petal.className =
        "petal";


    petal.style.left =
        `${Math.random() * 100}%`;


    petal.style.setProperty(
        "--duration",
        `${7 + Math.random() * 6}s`
    );


    petal.style.transform =
        `rotate(${Math.random() * 360}deg)`;


    petalsContainer.appendChild(
        petal
    );


    setTimeout(() => {

        petal.remove();

    }, 15000);

}


/* ============================================================
   HEART BURST
============================================================ */

function createHeartBurst(x, y, amount = 12) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("span");

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "✨";


        heart.style.position =
            "fixed";

        heart.style.left =
            `${x}px`;

        heart.style.top =
            `${y}px`;

        heart.style.zIndex =
            "500";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            `${14 + Math.random() * 18}px`;


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            60 + Math.random() * 130;

        const destinationX =
            Math.cos(angle) * distance;

        const destinationY =
            Math.sin(angle) * distance;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${destinationX}px),
                            calc(-50% + ${destinationY}px)
                        )
                        scale(1.2)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    700 + Math.random() * 600,

                easing:
                    "cubic-bezier(.22,.61,.36,1)",

                fill:
                    "forwards"
            }

        );


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 1500);

    }

}


/* ============================================================
   SCROLL REVEAL
============================================================ */

function setupScrollReveal() {

    const sections =
        document.querySelectorAll(
            ".reveal-section"
        );


    if (!("IntersectionObserver" in window)) {

        sections.forEach(section => {
            section.classList.add("visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ============================================================
   BUILD-UP MESSAGE SEQUENCE
============================================================ */

const sequenceMessages =
    document.querySelectorAll(
        ".sequence-message"
    );

const sequenceDots =
    document.getElementById(
        "sequenceDots"
    );


let sequenceIndex = 0;


function setupSequence() {

    sequenceMessages.forEach(
        (_, index) => {

            const dot =
                document.createElement("button");

            dot.type = "button";

            dot.className =
                "sequence-dot";

            dot.setAttribute(
                "aria-label",
                `Show message ${index + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    showSequence(index);

                }
            );


            sequenceDots.appendChild(
                dot
            );

        }
    );


    updateSequenceDots();

}


function showSequence(index) {

    if (
        index < 0 ||
        index >= sequenceMessages.length
    ) {
        return;
    }


    sequenceMessages.forEach(
        message => {

            message.classList.remove(
                "active"
            );

        }
    );


    sequenceIndex = index;


    sequenceMessages[
        sequenceIndex
    ].classList.add("active");


    updateSequenceDots();


    if (
        sequenceIndex ===
        sequenceMessages.length - 1
    ) {

        continueButton.textContent =
            "Ask Me Again... ❤️";

    } else {

        continueButton.textContent =
            "Continue... 💗";

    }

}


function updateSequenceDots() {

    const dots =
        sequenceDots.querySelectorAll(
            ".sequence-dot"
        );


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === sequenceIndex
        );

    });

}


continueButton.addEventListener(
    "click",
    () => {

        if (
            sequenceIndex <
            sequenceMessages.length - 1
        ) {

            showSequence(
                sequenceIndex + 1
            );

        } else {

            const proposal =
                document.getElementById(
                    "proposal"
                );

            proposal.scrollIntoView({
                behavior: "smooth"
            });

        }

    }
);


/* ============================================================
   NO BUTTON
============================================================ */

noButton.addEventListener(
    "click",
    () => {

        answerMessage.textContent =
            "That's okay ❤️ Take your time. Whatever you feel is completely okay.";

        answerMessage.style.opacity = "0";


        requestAnimationFrame(() => {

            answerMessage.style.opacity = "1";

        });


        createHeartBurst(
            noButton.getBoundingClientRect().left +
            noButton.offsetWidth / 2,

            noButton.getBoundingClientRect().top +
            noButton.offsetHeight / 2,

            6
        );

    }
);


/* ============================================================
   YES BUTTON
============================================================ */

let yesClicked = false;


yesButton.addEventListener(
    "click",
    () => {

        if (yesClicked) {
            return;
        }


        yesClicked = true;


        answerMessage.textContent =
            "You just made my whole world a little brighter. ❤️";


        createHeartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            35
        );


        createConfetti(130);


        celebrationOverlay.classList.add(
            "show"
        );


        celebrationOverlay.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }
);


/* ============================================================
   CONFETTI
============================================================ */

function createConfetti(amount = 100) {

    const symbols = [
        "♥",
        "✦",
        "•",
        "♡"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("span");

        confetti.className =
            "confetti";


        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            `${Math.random() * 100}vw`;


        confetti.style.fontSize =
            `${8 + Math.random() * 14}px`;


        confetti.style.setProperty(
            "--x",
            `${-150 + Math.random() * 300}px`
        );


        confetti.style.setProperty(
            "--rotation",
            `${-720 + Math.random() * 1440}deg`
        );


        confetti.style.setProperty(
            "--duration",
            `${2.5 + Math.random() * 3}s`
        );


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}


/* ============================================================
   SHOW FINAL MESSAGE
============================================================ */

seeFinalMessageButton.addEventListener(
    "click",
    () => {

        celebrationOverlay.classList.remove(
            "show"
        );


        celebrationOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "auto";


        finalMessage.classList.remove(
            "hidden"
        );


        requestAnimationFrame(() => {

            finalMessage.scrollIntoView({
                behavior: "smooth"
            });

        });


        createHeartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            25
        );

    }
);


/* ============================================================
   LIGHTBOX
============================================================ */

let lastFocusedPhoto = null;


function openLightbox(
    imageSrc,
    caption,
    altText
) {

    lastFocusedPhoto =
        document.activeElement;


    lightboxImage.src =
        imageSrc;

    lightboxImage.alt =
        altText || "Memory photograph";

    lightboxCaption.textContent =
        caption;


    lightbox.classList.add(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    lightboxClose.focus();

}


function closeLightbox() {

    lightbox.classList.remove(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "auto";


    lightboxImage.src = "";


    if (
        lastFocusedPhoto &&
        typeof lastFocusedPhoto.focus ===
        "function"
    ) {

        lastFocusedPhoto.focus();

    }

}


document
    .querySelectorAll(".photo-card")
    .forEach(photo => {

        photo.addEventListener(
            "click",
            () => {

                const image =
                    photo.dataset.image;

                const caption =
                    photo.dataset.caption;

                const imageElement =
                    photo.querySelector("img");


                openLightbox(
                    image,
                    caption,
                    imageElement
                        ? imageElement.alt
                        : "Memory photograph"
                );

            }
        );

    });


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


/* ============================================================
   LIGHTBOX KEYBOARD CONTROL
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("open")
        ) {

            closeLightbox();

        }


        if (
            event.key === "Escape" &&
            celebrationOverlay.classList.contains("show")
        ) {

            celebrationOverlay.classList.remove(
                "show"
            );

            celebrationOverlay.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow =
                "auto";

        }

    }
);


/* ============================================================
   MUSIC
============================================================ */

let musicPlaying = false;


musicButton.addEventListener(
    "click",
    async () => {

        try {

            if (!musicPlaying) {

                await backgroundMusic.play();

                musicPlaying = true;

                musicButton.classList.add(
                    "playing"
                );

                musicButton.textContent =
                    "🎶";

                musicButton.title =
                    "Pause music";

                musicButton.setAttribute(
                    "aria-label",
                    "Pause romantic music"
                );

                musicButton.setAttribute(
                    "aria-pressed",
                    "true"
                );

            } else {

                backgroundMusic.pause();

                musicPlaying = false;

                musicButton.classList.remove(
                    "playing"
                );

                musicButton.textContent =
                    "🎵";

                musicButton.title =
                    "Play music";

                musicButton.setAttribute(
                    "aria-label",
                    "Play romantic music"
                );

                musicButton.setAttribute(
                    "aria-pressed",
                    "false"
                );

            }

        } catch (error) {

            console.warn(
                "Music could not be played. Make sure romantic-song.mp3 exists in the same folder.",
                error
            );

        }

    }
);


/* ============================================================
   MUSIC STATE
============================================================ */

backgroundMusic.addEventListener(
    "ended",
    () => {

        musicPlaying = false;

        musicButton.classList.remove(
            "playing"
        );

        musicButton.textContent =
            "🎵";

    }
);


/* ============================================================
   IMAGE FALLBACK
============================================================ */

document
    .querySelectorAll(".photo-inner img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";


                const fallback =
                    image.parentElement
                        .querySelector(
                            ".photo-fallback"
                        );


                if (fallback) {

                    fallback.style.display =
                        "flex";

                }

            }
        );

    });


/* ============================================================
   INITIALIZATION
============================================================ */

function initializeWebsite() {

    applyPersonalization();

    setupScrollReveal();

    setupSequence();

    document.body.style.overflow =
        "hidden";

}


initializeWebsite();