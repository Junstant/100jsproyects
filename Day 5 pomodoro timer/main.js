// call the elements in the dom
const timeCounter = document.querySelector(".timeCounter");
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");
const breakButton = document.querySelector(".breakButton");
const resetButton = document.querySelector(".resetButton");
const secondColumn = document.querySelector(".secondColumn");
const pauseText = document.querySelector(".pauseText");

// set the initial time
let timeLeft = 25 * 60; // 25 minutes in seconds
let countdownInter;
let isPaused = false; //set status pause in false
let pausedTimeLeft = 0;  //create a var that holds the time past
let futureTime; // Define futureTime globally to make it accessible in pauseButton event listener
let timeExtra = 0; //defines the value of the extratime
let timeOpExtra = 0; //defines the value of the opossite extra time
let started = false;

function startTimer() {
  let startTime = Date.now();  //get the time (not constantly actualize)
  futureTime = startTime + timeLeft * 1000; //transform all to the same size

  countdownInter = setInterval(function () {
    //set reset button, clear the interval, actualize the timeLeft with the actual time, set the counter back to the default, and erase the extra time equaling its value
    resetButton.addEventListener("click", function () {
      clearInterval(countdownInter);
      pausedTimeLeft = futureTime - Date.now();
      timeCounter.innerHTML = "25:00";
      timeOpExtra = timeExtra;
      started = false;
    });
    //get the time to constantly substract to the time when the function starts
    let currentTime = Date.now();
    let timeDifference = futureTime - currentTime;
    let minutes = Math.floor(timeDifference / (1000 * 60)) + timeExtra - timeOpExtra;
    let seconds = Math.floor((timeDifference / 1000) % 60); // Adjusted to correctly calculate seconds
    //set the final output solving the 0 number issue with the ? operator
    timeCounter.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    //set the countdown over 
    if (timeDifference <= 0) {
      clearInterval(countdownInter);
      timeCounter.innerHTML = "00:00";
      alert("Time over");
    }
  }, 100);
}

//start button
startButton.addEventListener("click", function () {
  if(!started){
  startTimer();
  started = true;
}
});

//pause button
pauseButton.addEventListener("click", function () {
  if (!isPaused) {
    clearInterval(countdownInter);
    pauseText.innerHTML = "Resume";
    pausedTimeLeft = futureTime - Date.now(); // Store the remaining time difference
  } else {
    startTimer();
    pauseText.innerHTML = "Pause";
    futureTime = Date.now() + pausedTimeLeft; // Calculate the future time based on the stored remaining time difference
  }
  isPaused = !isPaused;
});


//set the extra times
breakButton.addEventListener("click", function () {
  timeExtra += 10;
});
secondColumn.addEventListener("click", function () {
  timeExtra += 25;
});
