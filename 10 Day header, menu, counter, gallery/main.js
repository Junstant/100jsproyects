// call elements from the dom
const cursorDot = document.querySelector("[data-cursor-Outline]");
const cursorOutline = document.querySelector("[data-cursor-Dot]");
const body = document.querySelector(".body");
const hoverElements = document.querySelectorAll("[customHover]");
const textArea = document.querySelector(".textArea");
const characterCount = document.querySelector(".characterCount");
const remainingCount = document.querySelector(".remainingCount");
const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menuIcon");
const offCanvasMenu = document.querySelector(".offCanvasMenu");
const closeIcon = document.querySelector(".closeIcon");
const galleryContainer = document.querySelector(".galleryContainer");
const loadMore = document.querySelector(".loadMore");

// * character counter
let characterLimit = 100; 
// set the character limit and show the number
remainingCount.innerHTML = characterLimit;

textArea.addEventListener("keyup",function() {
// function that actives every time a key is release
    let characterAmout = textArea.value.length;
    console.log(characterAmout);
    // if reaches the limit disables the input
    if(characterAmout === characterLimit){
        textArea.setAttribute("disabled","");
    }
    else{
        textArea.removeAttribute("disabled","");
    }
    // actualize the values left and counted
    characterCount.innerHTML = characterAmout;
    remainingCount.innerHTML = characterLimit - characterAmout;
});

// * sticky header
// add the listener to the window
window.addEventListener("scroll",function(){
    // if the scroll is bigger than the offset active the sticky
    if(window.scrollY > header.offsetTop){
        header.classList.add("active");
    }
    // else close it
    else{
        header.classList.remove("active");
    }
})

// * off canvas menu
// saves the function into a variable so i can call it whenever i like
let Menu = function closeOpen(){
    offCanvasMenu.classList.toggle("menuActive")
}
// active the buttons
menuIcon.addEventListener("click", Menu);
closeIcon.addEventListener("click", Menu);

//* infinite gallery
// creates a new request from api
const data = null;
const xhr = new XMLHttpRequest();

// convert the awnser into a JSON to get the parts of the data
let imageLoad = function loadImages(){
    if (this.readyState === this.DONE) {
        let response = JSON.parse(this.response);
        // clean the document fragment every time function is called
        let elementBox = document.createDocumentFragment();
        // clean the previous content to load the new amount
        galleryContainer.innerHTML = "";
        // make a function that iterates over the elements given
        response.photos.forEach(function(photo){
            let imgContainer = document.createElement("DIV");
            imgContainer.style.backgroundImage = `url(${photo.src.original})`;
            elementBox.appendChild(imgContainer);
            galleryContainer.appendChild(elementBox);
        })    
    }
}

// defines the amout of pictures and the url
let pages = 3;
let urlApi = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=' + `${pages}` + '&page=1';

function apiRequest(){
    // defines all the parameters to get the awnser from the api
    xhr.open('GET', urlApi);
    xhr.setRequestHeader('Authorization', 'RbwfsVPSmXJULl8sVr5tKI52JGfbPkDUnEJR3XP1yq9kuBt6Kx7FEqdJ');
    xhr.setRequestHeader('X-RapidAPI-Key', '685e831e0amsh9ce0a6e1d756b63p172a01jsn36294e64c809');
    xhr.setRequestHeader('X-RapidAPI-Host', 'PexelsdimasV1.p.rapidapi.com');
    xhr.send(data);
}

loadMore.addEventListener("click", function(){
    // add more images
    pages += 3;
    // redefines the url to add more images
    urlApi = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=' + `${pages}` + '&page=1';
    // make the request
    apiRequest();
});
// make the first request
apiRequest();

// event that triggers a function when the api gives the ok
xhr.addEventListener('readystatechange', imageLoad);

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