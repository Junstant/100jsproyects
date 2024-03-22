// Call elements from DOM
const timePast = document.querySelector(".timePast");
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");
const restartButton = document.querySelector(".restartButton");

// Define the function
function start() {
    let startTime = Date.now(); // Saves the start time
    setInterval(function() {
        let elapsedTime = (Date.now() - startTime) / 1000; // Calculates the time elapsed in seconds
        let actualSeconds = Math.floor(elapsedTime % 60); // Calculates seconds
        let actualMinutes = Math.floor(elapsedTime / 60); // Calculates minutes

        let miliSecondsOutput = Math.floor(elapsedTime * 100 % 100); // Calculates milliseconds

        // Format the output to have leading zeros
        let miliSecondsString = miliSecondsOutput < 10 ? "0" + miliSecondsOutput : miliSecondsOutput;
        let secondsString = actualSeconds < 10 ? "0" + actualSeconds : actualSeconds;
        let minutesString = actualMinutes < 10 ? "0" + actualMinutes : actualMinutes;

        timePast.innerHTML = `${minutesString}:${secondsString}:${miliSecondsString}`;
    }, 100);
}

startButton.addEventListener("click", start);