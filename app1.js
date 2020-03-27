var input = document.querySelector(".input");
var btn = document.querySelector(".submit");
var temp1 = document.querySelector(".temp"); 
var image = document.querySelector(".img");
var desc = document.querySelector(".desc");
var one  = document.querySelector(".one");
var containers = document.getElementsByClassName("container");
var arr = document.getElementById("two").children;
var cont = document.querySelector(".cont");
var head = document.querySelector(".head");
var arr1 = document.getElementById("three").children;
var bott = document.querySelector(".text");

btn.addEventListener("click", function(event){

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
	.then(response => response.json())
	.then(data => {

		var temp2 = Math.floor(data["main"]["temp"] - 273);
		var info = data["weather"][0]["main"];
		var press = data["main"]["pressure"];
		var hum = data["main"]["humidity"];
		var ltemp = Math.floor(data["main"]["temp_min"]);
		var htemp = Math.floor(data["main"]["temp_max"]);
		var k=0;
		var wind = data["wind"]["speed"];
		var txt = data["weather"][0]["description"];

		x = temp2 + "°C";
		temp1.innerHTML = x;
		desc.innerHTML = info;

		arr[0].innerHTML = "Day Temp. : " + (ltemp - 273) + "°C";
		arr[1].innerHTML = "Night Temp. : " + (htemp - 273) + "°C";
		arr[2].innerHTML = txt;

		arr1[0].innerHTML = "Pressure: " + press + " Pa";
		arr1[1].innerHTML = "Humidity: " + hum;
		arr1[2].innerHTML = "Wind: " + wind;

		if (info == "Clear") {
			image.src = "Icons/animated/day.svg";
			k = 1;
		}

		if (info == "Snow") {
			image.src = "Icons/animated/Snowy-6.svg";
			k = 1;
		}

		if (info == "Haze") {
			image.src = "Icons/animated/Cloudy.svg";
			k=1;
		}

		if (info == "Rain") {
			image.src = "Icons/animated/Rainy-6.svg";
			k=1;
		}

		if (info == "Clouds") {
			image.src = "Icons/animated/Cloudy.svg";
			k=1;
		}

		if (info == "Mist") {
			image.src = "Icons/animated/Snowy-4.svg";
			k=1;
		}

		if (k==0) {
			image.src = "";
		}

		for (i=0;i<containers.length;i++) {
			containers[i].style.animation = "animate 1s ease-in";
			containers[i].style.animationFillMode = "forwards";
	}

	    cont.style.animation = "top 0.5s linear";
	 	cont.style.animationFillMode = "forwards";  
	 	input.placeholder = input.value; 

		head.style.animation = "invis 0.4s linear";
		head.style.animationFillMode = "forwards";

		bott.style.animation = "invis 0.4s linear";
		bott.style.animationFillMode = "forwards";
	})

	.catch(err => alert("Place does not exist!"));
	
})

