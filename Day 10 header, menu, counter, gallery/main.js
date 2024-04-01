const cursorDot = document.querySelector("[data-cursor-Outline]");
const cursorOutline = document.querySelector("[data-cursor-Dot]");
const body = document.querySelector(".body");
const hoverElements = document.querySelectorAll("[customHover]");
const textArea = document.querySelector(".textArea");
const characterCount = document.querySelector(".characterCount");
const remainingCount = document.querySelector(".remainingCount");

// * character counter
let characterLimit = 100;
remainingCount.innerHTML = characterLimit;

textArea.addEventListener("keyup",function() {

    let characterAmout = textArea.value.length;
    console.log(characterAmout);
    if(characterAmout === characterLimit){
        textArea.setAttribute("disabled","");
    }
    else{
        textArea.removeAttribute("disabled","");
    }
    characterCount.innerHTML = characterAmout;
    remainingCount.innerHTML = characterLimit - characterAmout;
});

//* infinite gallery
const data = null;

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
        const response = JSON.parse(this.response);
		console.log(response.photos);
        response.photos.forEach(function(photo){
            console.log(photo.id);
        })
        }
	}
);

xhr.open('GET', 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=3&page=1');
xhr.setRequestHeader('Authorization', 'RbwfsVPSmXJULl8sVr5tKI52JGfbPkDUnEJR3XP1yq9kuBt6Kx7FEqdJ');
xhr.setRequestHeader('X-RapidAPI-Key', '685e831e0amsh9ce0a6e1d756b63p172a01jsn36294e64c809');
xhr.setRequestHeader('X-RapidAPI-Host', 'PexelsdimasV1.p.rapidapi.com');

xhr.send(data);

//* custom cursor
window.addEventListener("mousemove", function(e) {
    let posX = e.clientX;
    let posY = e.clientY;
    cursorOutline.style.left = `${posX}px`;
	cursorOutline.style.top = `${posY}px`;
    cursorDot.animate({
		left: `${posX}px`,
		top: `${posY}px`
	}, {duration: 500, fill: "forwards"});
});

function addPointerClass() {
    cursorOutline.classList.add('cursorPointer');
}
function removePointerClass() {
    cursorOutline.classList.remove('cursorPointer');
}
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', addPointerClass);
    element.addEventListener('mouseleave', removePointerClass);
});