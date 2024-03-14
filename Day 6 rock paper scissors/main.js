// call the elements from the dom
const moveMachine = document.querySelector(".containerMoveMachine");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const scoreHuman = document.querySelector(".scoreHuman");
const scoreMachine = document.querySelector(".scoreMachine");
const machineMoveImgHTML = document.querySelector(".machineMoveImgHTML");
// get the images to change on machine move
let machineImgMoves = {
    1: "rsc/rock.png",
    2: "rsc/paper.png",
    3: "rsc/scissor.png"
}
let assigmentMovesMachine= {
    1: "rock",
    2: "paper",
    3: "scissors"
}

let gameStart = false;
let moveMade = "";
let scoreGameHuman= 0;
let scoreGameMachine = 0;

// activate and desactivate the events
function enableClick(){
    rock.addEventListener("click", rockM);
    paper.addEventListener("click", paperM);
    scissors.addEventListener("click", scissorsM);
}
function disableClick(){
    rock.removeEventListener("click", rockM);
    paper.removeEventListener("click", paperM);
    scissors.removeEventListener("click", scissorsM);
}


// Defines the functions of moves
function rockM() {
    moveMade = "rock";
    disableClick();
    machineMove();
}

function paperM() {
    moveMade = "paper";
    disableClick();
    machineMove();
}

function scissorsM() {
    moveMade = "scissors";
    disableClick();
    machineMove();
}

// Assign event listeners outside of the gameStarted function
rock.addEventListener("click", rockM);
paper.addEventListener("click", paperM);
scissors.addEventListener("click", scissorsM);

// set the conditions if game is started or not
function gameStarted() {
    if (gameStart === false) {
        gameStart = true;
    }
}

// random machine moves
function machineMove(){
    setTimeout(function() {
        let result = "";
        let randomMove = Math.round(Math.random() * 2 + 1);
        machineMoveImgHTML.src = machineImgMoves[randomMove];
        let machineMoveMade = assigmentMovesMachine[randomMove];
        // result check
        if(moveMade === machineMoveMade){
            result = "draw";
        }
        else if((moveMade === "rock") && (machineMoveMade != "paper")){
            result = "win";
        }
        else if((moveMade === "paper") && (machineMoveMade != "scissors")){
            result = "win";
        }
        else if((moveMade === "scissors") && (machineMoveMade != "rock")){
            result = "win";
        }
        else{
            result = "lose";
        }
        // show the results
        if(result === "win"){
            scoreGameHuman++;
            scoreHuman.innerHTML = "";
            scoreMachine.innerHTML = "";
            scoreHuman.innerHTML = scoreGameHuman;
            scoreMachine.innerHTML = scoreGameMachine;
        }
        else if(result === "draw"){
            scoreHuman.innerHTML = "Draw";
            scoreMachine.innerHTML = "Draw";
        }
        else{
            scoreGameMachine++;
            scoreHuman.innerHTML = scoreGameHuman;
            scoreMachine.innerHTML = scoreGameMachine;
        }
    }, 1000)
    enableClick();
    gameStart = false;
}