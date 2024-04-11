// / call elements from the dom
const cursorDot = document.querySelector("[data-cursor-Outline]");
const cursorOutline = document.querySelector("[data-cursor-Dot]");
const emojiName = document.querySelector(".emojiName");
const txtBgk = document.querySelector(".txtBgk");
const secondChild = document.querySelector(".secondChild");
const randomButtom = document.querySelector(".randomButtom");

// defines const
const data = null;
const xhr = new XMLHttpRequest;
// creates an objects that will contain all the 
let emojiList = [];

// creates a function that's make a request from the api endpoint
function apiRequest(){
    // endpoint
    xhr.open('GET', 'https://emoji-api.com/emojis?access_key=8938a5775be90ad910d921ff1582deddec5333c9');
    xhr.send(data);
    // wait for API response
    xhr.addEventListener('readystatechange', function(){
        if(this.readyState === this.DONE){
            // convert in object the response
            let response = JSON.parse(this.response);
            // for i in response
            for (let i = 0; i < 100; i++){
                emojiList.push({
                    emojiImg: response[i].character,
                    emojiName: response[i].unicodeName,
                })
            }
            // when API answer active the button and inner results
            randomEmoji();
            buttonActive();

        }
    })
}
apiRequest();

let randomEmoji = function(){
    // gets a number between 0 and the end of the list
    const randomNumber = (Math.floor(Math.random() * emojiList.length));
    const randomEmoji = emojiList[randomNumber];
    // inner the text
    txtBgk.innerHTML = randomEmoji.emojiName;
    emojiName.innerHTML = randomEmoji.emojiName;
    secondChild.innerHTML = randomEmoji.emojiImg;
}
let buttonActive = function(){
    randomButtom.addEventListener("click", function(){
        randomEmoji();
    })
}


// custom cursor
window.addEventListener("mousemove", function(e){
    let posX = e.clientX;
    let posY = e.clientY;
    cursorOutline.style.top = `${posY}px`
    cursorOutline.style.left = `${posX}px`
    cursorDot.animate({
        left: `${posX}px`,
        top: `${posY}px`}, {duration:500, fill:"forwards"});
})