// call the elements in the dom
const timeCounter = document.querySelector(".timeCounter");
const startButton = document.querySelector(".startButton");
const pauseButton = document.querySelector(".pauseButton");
const breakButton = document.querySelector(".breakButton");
const resetButton = document.querySelector(".resetButton");
const secondColumn = document.querySelector(".secondColumn");

// set the time left
let actualTime = new Date().getTime();


startButton.addEventListener("click", function() {
    let timeLeft = 25;
    let futureTime = actualTime + (timeLeft * 60 * 1000);
    let breakTime = 0;
    let countdownInter = setInterval(function(){
        let minutesDead = 0;
        let secondsDead = 0;
        let resumeActive = startButton.classList.contains("resumeButton");
        let currentTime = new Date().getTime();
        let timeDifference = futureTime - currentTime;
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        if(resumeActive === true){
            minutesDead = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            secondsDead = Math.floor((timeDifference % (1000 * 60)) / 1000);
        }
        timeCounter.innerHTML = parseInt(minutes + breakTime - minutesDead) + :+ parseInt(seconds - secondsDead);
        
        if (timeDifference < 0) {
            clearInterval(countdownInter);
            timeCounter.innerHTML = "Tiempo terminado";
        }
        pauseButton.addEventListener("click", function() {
            clearInterval(countdownInter);
        });
    }, 100);
    breakButton.addEventListener("click",function(){
        breakTime += 10; 
    });
    secondColumn.addEventListener("click",function(){
        breakTime += 25; 
    });
});

pauseButton.addEventListener("click",function() {
    startButton.classList.toggle("resumeButton");
})