const COORDS =  "coords";
const API_KEY = "0b12faa3aa3bef359f18eb9d28cd76da";
const weather = document.querySelector(".js-weather")


function getWeather(lat,lng){
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
   ).then(function(response){
      return response.json();
   }).then(function(json){
       const temperature = json.main.temp;
       const place = json.name;
       weather.innerText = `${temperature},${place}`
   })
}

function saveCoords(coordsObj){
     localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log("cant access geo location")
}

function handleGeoSuccess(position){
     const latitude = position.coords.latitude;
     const longitude = position.coords.longitude;
     const coordsObj = {
        latitude: latitude,
        longitude: longitude
     }
    saveCoords(coordsObj);
    getWeather(latitude,longitude); 
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if(loadedCords === null){
      askForCoords();
  } else {
      const parseCoords = JSON.parse(loadedCords);
      console.log(parseCoords);
      getWeather(parseCoords.latitude,parseCoords.longitude);
  }
}

function init(){
    loadCoords();
}
init();