function myFunction(){
	var where = document.getElementById('recherche').value;

	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		targetUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + where + '&lang=fr&units=metric&appid=c6a74758632ead02a805fe5ce35ba0fb'
	fetch(proxyUrl + targetUrl)
		.then(res => res.json())
		.then(data => {
			console.table(data);
			var ville = document.getElementById('Ville');
			ville.innerHTML = data.name;

			var temp = document.getElementById('Temp');
			temp.innerHTML = data.main.temp + "° ";

			var photo = document.getElementById('Photo');
			photo.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

			return data;})
		.catch(e => {console.log(e);return e;});
}
