// ================================
// WHATSAPP ORDER FUNCTION
// ================================

function order(service) {

    const phone = "917348152598";

    const message =
        "Hello! I am interested in your " +
        service +
        ". Please tell me the details and final price.";

    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// ================================
// TYPING ANIMATION
// ================================

const typingText = document.getElementById("typing-text");

const texts = [
    "Welcome to All Izz Well 🚀",
    "Professional Digital Services 💻",
    "Resume • Excel • PDF • Design 🎨",
    "Affordable Prices • Fast Delivery ⚡",
    "Your Work, Our Responsibility 💯"
];

let textIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}


typeEffect();
