function myFunction(){
	var where = document.getElementById('recherche').value;

	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		targetUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + where + '&lang=fr' + '&units=metric' + '&cnt=7' + '&appid=c10bb3bd22f90d636baa008b1529ee25'
	fetch(proxyUrl + targetUrl)
		.then(res => res.json())
		.then(data => {
			//console.table(data);
			for(i=0; i<7; i++){
				var cellule = document.getElementById('Cel' + i);
				var titre = document.getElementById('Titre' + i);
				var texte = document.getElementById('Texte' + i);
				var photo = document.getElementById('Photo' + i);
				if (i==0){
					titre.innerHTML = "Aujourd'hui";
					texte.innerHTML = "Aujourd'hui il fait " + data.list[i].temp.day + "°C à " + data.city.name;
				}
				else{
					titre.innerHTML = "J+" + i;
					if (i==1)
						texte.innerHTML = "Dans " + i + " jour il fera " + data.list[i].temp.day + "°C à " + data.city.name;
					else
						texte.innerHTML = "Dans " + i + " jours il fera " + data.list[i].temp.day + "°C à " + data.city.name;
				}

				var temp = data.list[i];
				photo.setAttribute("src", "http://openweathermap.org/img/w/" + temp.weather[0].icon + ".png");
				cellule.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
			}
			
			return data;})
		.catch(e => {console.log(e);return e;});
}

$('.search-input').focus(function(){
	$(this).parent().addClass('focus');
}).blur(function(){
	$(this).parent().removeClass('focus');
})