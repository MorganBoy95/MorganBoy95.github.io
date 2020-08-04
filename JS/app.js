function getWeather() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Peterborough,uk&appid=b07d395ad6e2598b38dda60042d83f5b"
  )
    .then(function (resp) {
      if (resp.status !== 200) {
        console.log(
          "Looks like there was a problem. Status code: " + resp.status
        );
        return;
      }

      resp.json().then(function (data) {
        console.log(data);
        drawWeather(data);
      });
    })

    .catch(function (err) {
      // catch any errors
      console.log('Fetch Error :-S', err);
    });
}

window.onload = function () {
  getWeather();
};

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);

  document.getElementById("desc").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("name").innerHTML = d.name;
}
