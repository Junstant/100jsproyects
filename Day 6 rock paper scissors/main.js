// call the elements from the dom
const moveMachine = document.querySelector(".containerMoveMachine");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const scoreHuman = document.querySelector(".scoreHuman");
const scoreMachine = document.querySelector(".scoreMachine");
// get the images to change on machine move
let machineImgMoves = {
    1: "url(rsc/rock.png)",
    2: "url(rsc/paper.png)",
    3: "url(rsc/scissors.png)"
}

let gameStart = false;
let moveMade = "";

if(gameStart === false && moveMade === ""){
function gameStarted(){
        rock.addEventListener("click", function(){
            moveMade = "rock";
            gameStart = true;
            console.log(moveMade);
        });
        paper.addEventListener("click", function(){
            moveMade = "paper";
            gameStart = true;
            console.log(moveMade);
        });
        scissors.addEventListener("click", function(){
            moveMade = "scissors";
            gameStart = true;
            console.log(moveMade);
        });
    }
}

gameStarted();

function play(){
    console.log("hola");
}