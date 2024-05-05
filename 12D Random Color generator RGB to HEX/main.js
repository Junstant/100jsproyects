// import elements from dom
const generateButton = document.querySelector(".generateButton");
const badge = document.querySelector(".badge");
const hexCode = document.querySelectorAll(".hexCode");
const colorContainer = document.querySelectorAll(".colorContainer");
const copyClip = document.querySelectorAll(".ph-copy");

// create hexadecimal table with the values
const hexTable = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
}

const generateColor = function(){
    // for every container that has the class of colorContainer
    for (let i = 0; i < colorContainer.length; i++) {
    // generate random values between 0 - 255
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);
    // convert red
    let Ra = Math.floor(R/16);
    let Rb = R % 16;
    // convert green
    let Ga = Math.floor(G/16);
    let Gb = G % 16;
    // convert blue
    let Ba = Math.floor(B/16);
    let Bb = B % 16;
    // check if the values have a equivalence in the table and change te value if it does
    if(hexTable.hasOwnProperty(Ra)){
        Ra = hexTable[Ra];
    }
    if(hexTable.hasOwnProperty(Rb)){
        Rb = hexTable[Rb];
    }
    if(hexTable.hasOwnProperty(Ga)){
        Ga = hexTable[Ga];
    }
    if(hexTable.hasOwnProperty(Gb)){
        Gb = hexTable[Gb];
    }
    if(hexTable.hasOwnProperty(Ba)){
        Ba = hexTable[Ba];
    }
    if(hexTable.hasOwnProperty(Bb)){
        Bb = hexTable[Bb];
    }
    // generate Hex code with the parameters
    let response = `#${Ra}${Rb}${Ga}${Gb}${Ba}${Bb}` 
    // make the visual changes in the DOM elements
    generateButton.style.backgroundColor = response;
    badge.style.backgroundColor = response;

    colorContainer[i].style.backgroundColor = response;
    hexCode[i].innerHTML = response;
    // add a function to every color container that copy the hex code with a click
    colorContainer[i].addEventListener("click", function(){
        navigator.clipboard.writeText(response);
    })

}
}
// start the secuence
generateColor();
