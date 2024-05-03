// import elements from DOM
const passwordContainer = document.querySelector(".passwordContainer");
const generateButton = document.querySelector(".generateButton");
const password = document.querySelector(".password");
const copyPassword = document.querySelector(".clipboard");

// create the password container
let passwordGenerated = "";


// make the database from the random password
const characters = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "?",
    11: "A",
    12: "B",
    13: "C",
    14: "D",
    15: "E",
    16: "F",
    17: "G",
    18: "H",
    19: "I",
    20: "J",
    21: "K",
    22: "L",
    23: "N",
    24: "M",
    25: "!",
    26: ";",
    27: ".",
    28: "#",
    29: "o",
    30: "$",
    31: "%",
    32: "&",
    33: "*",
    34: "(",
    35: ")",
    36: "?",
    37: "/",
    38: "z",
    39: "g",
    40: "s",
    41: "[",
    42: "]",
    43: "=",
    44: "+",
    45: "-",
    46: "_",
    47: "<",
    48: ">",
    49: "x",
    50: "x",
};
// generate random password
function generatePassword(){
    let password = "";
    for(let i = 0; i < 12; i++){
        let random = Math.floor(Math.random() * 50);
        password += characters[random];
    }
    passwordGenerated = password;
}

// button event listener
generateButton.addEventListener("click", function(){
    generatePassword();
    password.innerHTML = passwordGenerated; 
});
// copy password to clipboard
copyPassword.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordGenerated);
});