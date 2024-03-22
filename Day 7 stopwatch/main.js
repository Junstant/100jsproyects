// call elements from dom
const timePast = document.querySelector(".timePast");
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");
const restartButton = document.querySelector(".restartButton");

// defines the function
function start() {
    let startTime = Date.now(); //saves the start time
    setInterval(function() {
        let elapsedTime = (Date.now() - startTime) / 1000; // Calcs the time past in seconds
        let actualTimeMinutes = Math.floor(elapsedTime / (1000 * 60)); // transform the time in minutes
        let actualTimeSeconds = Math.floor(elapsedTime / 1000); // transform the time in seconds
        let actualMiliSeconds= elapsedTime; // transform the time in miliseconds
        timePast.innerHTML = ${actualTimeMinutes}:
    }, 100);
}


startButton.addEventListener("click", start);