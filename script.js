const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
        speak("How can i help?");
    } 
    else if(hr == 12) {
        speak("Good noon");
        speak("How can i help?");
    } 
    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
        speak("How can i help?");
    } 
    else {
        speak("Good Evening");
        speak("How can i help?");
    }
}

window.addEventListener('load', ()=> {
    speak("Hi..");
    speak("I'm a virtual assistant. My name is Assistify. I'm developed by MH Newaz");
    wishMe("");
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=> {
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hi') || message.includes('hello')) {
        const finalText = "Hi there! How may I assist you?";
        speech.text = finalText;
    } 
    else if(message.includes('how are you')) {
        const finalText = "I'm doing well, thank you for asking. How can I assist you today?";
        speech.text = finalText;
    }
    else if(message.includes('introduce yourself')) {
        const finalText = "Hello! I'm Assistify, your virtual assistant. My purpose is to assist you in various tasks. I'm currently under development and strive to become even more capable with time. I'm developed by MH Newaz and aim to make your life easier. How can I assist you today?";
        speech.text = finalText;
    }
    else if(message.includes('how old are you')) {
        const finalText = "As a virtual assistant, I don't have an age in the traditional sense. However, I began my journey in 2024, when I was first developed.";
        speech.text = finalText;
    }
    else if(message.includes('what are you doing now') || message.includes('what are you doing') || message.includes('what are you doing right now')) {
        const finalText = "At the moment, I'm assisting you. Is there anything specific you'd like help with?";
        speech.text = finalText;
    }
    else if(message.includes('what is your name')) {
        const finalText = "My name is Assistify";
        speech.text = finalText;
    }
    else if(message.includes('who is your developer') || message.includes('who developed you') || message.includes('who build you')) {
        const finalText = "I was developed by MH Newaz. You can find more about my developer on his GitHub profile.";
        window.open("https://github.com/newaz10", "_blank");
        speech.text = finalText;
    }
    else if(message.includes('can you help me')) {
        const finalText = "Feel free to ask me anything, and I'll do my best to assist you.";
        speech.text = finalText;
    }
    else if(message.includes('who are you')) {
        const finalText = "Hey!! I'm Assistify. I'm your personal virtual assistant.";
        speech.text = finalText;
    }
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('how can')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }
    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }
    else if(message.includes('open calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
