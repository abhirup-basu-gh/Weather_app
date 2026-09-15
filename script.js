const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=40.730610&longitude=-73.935242&lang=EN');
xhr.setRequestHeader('x-rapidapi-key', 'fb7ce7be52msh1a19cce97d3b21ep1c2a7cjsn96c2be0826f1');
xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);