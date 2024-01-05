const mic = document.getElementById("btn");
const stop = document.getElementById("stop");
const textArea = document.getElementById("textArea");

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const mySpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new mySpeechRecognition();

  recognition.continous = true;
  recognition.interimResults = true;

  recognition.onresult = function (event) {
    // To access results property of the event

    const outcome = event.results[event.results.length - 1];

    const writtenVersion = event.results[0][0].transcript;
    textArea.innerHTML = writtenVersion;
  };

  //   event for error

  recognition.onerror = function (event) {
    console.log("cannot recognize speech", event.error);
  };

  //   event for the microphone

  mic.addEventListener("click", function () {
    recognition.start();
  });
  stop.addEventListener("click", function () {
    recognition.stop();
  });
} else {
  textArea.innerHTML = "speech recognition is not supported on this browser";
}
