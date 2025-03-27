let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1 ;
    text_speak.lang = "Hi";
    window.speechSynthesis.speak(text_speak);
}
    


function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon sir");
    } else {
        speak("Good evening sir");
    }
}

window.addEventListener("load", () => {
    wishMe();
});


let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("i am Ashri, the virtual assistant, created by Adi Sir");
    } else if (message.includes("are you chutiya")||message.includes("kya tum chutiya ho")) {
        speak("tu chutiya, gandu");
    } else if (message.includes("will you be my girlfriend")||message.includes("will you be my wife")) {
        speak("god made me for only adity but i salute your choice");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open linkedin")) {
        speak("Opening LinkedIn...");
        window.open("https://linkedin.com/", "_blank");
    } else if (message.includes("open github")) {
        speak("Opening GitHub...");
        window.open("https://github.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, {day:"numeric",month:"short" });
        speak(date);
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, {hour:"numeric",minute:"numeric" });
        speak(time);
    } else {
        let finalText = "This is what I found on the internet regarding " + message.replace("Asri", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("Adhi", "")}`, "_blank");
    }

}