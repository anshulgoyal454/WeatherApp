
function send(data)
{
  console.log("printed")
}
function searchWeather(){

var loc=document.getElementById("location").value
    const proxyurl = `https://cors-anywhere.herokuapp.com/`;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=48d885f4352f1280bde2cf4b89efe29a`;

fetch(proxyurl + url)
  .then(response => {
    return response.json()
  })
  .then(data => {    
    console.log(data)
    console.log(data.main.temp)
    console.log("printed")
    document.getElementById("temperature").innerHTML="Temp: " + Math.floor(data.main.temp-273) +" C"
    document.getElementById("cityCountry").innerHTML="City: " + (data.name) + " , " +(data.sys.country);

    document.getElementById("minTemp").innerHTML="Min: " + Math.floor(data.main.temp_min-273) +" C"
    document.getElementById("maxTemp").innerHTML="Max: " + Math.floor(data.main.temp_max-273) +" C"

    document.getElementById("forcast").innerHTML="Today's forcast " + (data.weather[0].main)


















  })
  .catch(err => {
  })
  
}
