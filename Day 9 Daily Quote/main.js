const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		
		const response = JSON.parse(this.response); //convert to object to acces the indivdiual parts
		const author = response.author;
		const quotes = response.text;
		console.log("Author:", author);
		console.log("Quote:", quotes);
	}
});

xhr.open('GET', 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info');
xhr.setRequestHeader('X-RapidAPI-Key', '685e831e0amsh9ce0a6e1d756b63p172a01jsn36294e64c809');
xhr.setRequestHeader('X-RapidAPI-Host', 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com');

xhr.send(data);