var city = document.querySelector(".city");
var temperature = document.querySelector(".temp");
var captiondesc = document.querySelector(".description")
var humidity = document.querySelector(".humidity")

var day1temp = document.querySelector(".day1")
var day2temp = document.querySelector(".day2")
var day3temp = document.querySelector(".day3")


fetch('https://api.openweathermap.org/data/2.5/onecall?lat=32.71&lon=-117.16&appid=2a862fd172efcdfbe3b4a778bbdbf229')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var tempValue = parseInt(((parseFloat(data['current']['temp'])-273.15)*1.8)+32);
    var humidityValue = parseInt(data['current']['humidity'])
    var descriptionValue = (data['current']['weather'][0]['description']);
    descriptionValue = descriptionValue.charAt(0).toUpperCase() + descriptionValue.slice(1);
    temperature.innerHTML = "Temp: " + tempValue;
    humidity.innerHTML = "Humidity: " + humidityValue;
    captiondesc.innerHTML = " " + descriptionValue;

    var temp1val = parseInt(((parseFloat(data['daily']['0']['temp']['day'])-273.15)*1.8)+32)
    var temp2val = parseInt(((parseFloat(data['daily']['1']['temp']['day'])-273.15)*1.8)+32)
    var temp3val = parseInt(((parseFloat(data['daily']['2']['temp']['day'])-273.15)*1.8)+32)

    day1temp.innerHTML = temp1val
    day2temp.innerHTML = temp2val
    day3temp.innerHTML = temp3val

  })

