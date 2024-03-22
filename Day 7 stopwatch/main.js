// Call elements from DOM
const timePast = document.querySelector(".timePast");
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");
const restartButton = document.querySelector(".restartButton");

let isPaused = false; //defines the boleeans out the function to save the value
let isStarted = false;
let stopWatch; //declares the variable of the function
let startTime; //saves the value of the start
let timePaused = 0; 

// Define the function
function start() {
    startTime = Date.now(); // Saves the start time
    stopWatch = setInterval(function() {
        let elapsedTime = (Date.now() - startTime + timePaused) / 1000; // Adjusted elapsed time for pause
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

// start button
startButton.addEventListener("click", function(){
    if (!isStarted) {
        start();
        isStarted = true;    
    }
});

// pause button
pauseButton.addEventListener("click", function () {
    if (!isPaused) {
        clearInterval(stopWatch);
        timePaused += Date.now() - startTime; // Adjusted to accumulate pause time
        pauseButton.classList.add("active");
        startButton.classList.add("desactivated");
    } else {
        start(); 
        pauseButton.classList.remove("active");
        startButton.classList.remove("desactivated");
    }
    isPaused = !isPaused;
});

// reset button
restartButton.addEventListener("click",function() {
    clearInterval(stopWatch);
    startTime = 0;
    timePaused = 0;
    isStarted = false;
    isPaused = false;
    timePast.innerHTML = "00:00:00"
})