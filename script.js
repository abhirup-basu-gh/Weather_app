const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://cities-temperature.p.rapidapi.com/weather/v1/current?location=Kolkata');
xhr.setRequestHeader('x-rapidapi-key', 'fb7ce7be52msh1a19cce97d3b21ep1c2a7cjsn96c2be0826f1');
xhr.setRequestHeader('x-rapidapi-host', 'cities-temperature.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);