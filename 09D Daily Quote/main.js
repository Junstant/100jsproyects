const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const quoteDaily = document.querySelector(".quoteDaily");
const authorDaily = document.querySelector(".authorDaily");


window.addEventListener("mousemove", function(e) {
	const posX = e.clientX;
	const posY = e.clientY;
	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;
	cursorOutline.animate({
		left: `${posX}px`,
		top: `${posY}px`
	}, {duration: 500, fill: "forwards"});
});

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		
		const response = JSON.parse(this.response); //convert to object to acces the indivdiual parts
		const author = response.author;
		const quotes = response.text;
		if(author === ""){
		authorDaily.innerHTML = `Author: Unknow`;
		}
		else{
		authorDaily.innerHTML = `Author: ${author}`;
		}
		quoteDaily.innerHTML = `"${quotes}"`;
	}
});
// get the url to modify with links
xhr.open('GET', 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info'); 
// set the api key
xhr.setRequestHeader('X-RapidAPI-Key', '685e831e0amsh9ce0a6e1d756b63p172a01jsn36294e64c809');
// set the host to make the request
xhr.setRequestHeader('X-RapidAPI-Host', 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com');
xhr.send(data);