const getIp = async () => {
  const url =
    "http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone";
  const request = await fetch(url);
  const data = request.json();
  // console.log(data.timezone);
  return data;
};

const getWeather = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=166657246414c1ca9c7977c04b0881a9`;
  const request = await fetch(url);
  const data = request.json();
  return data;
};

getIp()
  .then(function (responseData) {
    //    console.log(responseData);
    //   console.log(responseData.city);
    return getWeather(responseData.lat, responseData.lon); // or again .then ...
    // getWeather(responseData.lat, responseData.lon).then(function(response){
    //     let weMain = response.weather[0].main;
    //     return weMain;
    // }).catch(function(){
    //     console.log('false');
    // })
  })
  .catch(function () {
    console.log("There is no response, Try later ...");
  });

getWeather()
  .then(function (responseData) {
    // getIp()
    //   .then(function (response) {
    //     var lat = response.lat;
    //     var lon = response.lon;
    //   })
    //   .catch(function () {
    //     console.log("no response");
    //   });
    //   console.log(lat);
  })
  .catch(function () {
    console.log("No response ... ");
  });

function getDayOrNight() {
  let d = new Date();
  let dayOrNight;
  if (d.getHours() > 6 && d.getHours() < 19) {
    dayOrNight = "Day";
  } else {
    dayOrNight = "Night";
  }
  return dayOrNight;
}

function getIcon(weatherMain) {
  let icon;
  switch (weatherMain) {
    case "clouds":
      icon = `${weatherMain}.svg`;
      break;
    case "rain":
      icon = `${weatherMain}.svg`;
      break;
    case "clear":
      console.log("ggggggg");
      const dayNight = getDayOrNight();
      icon = `${weatherMain}-${dayNight}.svg`;
      break;
    case "snow":
      icon = `${weatherMain}.svg`;
      break;
    case "drizzle":
      icon = `${weatherMain}.svg`;
      break;
    case "thunderstorm":
      icon = `${weatherMain}.svg`;
      break;
    case "atmosphere":
      icon = `${weatherMain}.svg`;
      break;
  }
  return icon;
}

function getTemp(weatherTemp) {
  let k = weatherTemp;
  let c = weatherTemp - 273.15;
  let f = (weatherTemp - 273.15) * 9.5 + 32;
  let temp = { kel: Math.floor(k), fa: Math.floor(f), ca: Math.floor(c) };
  return temp;
}

const timezone = document.querySelector(".timezone");
const test = document.querySelector(".test");
// const
// const
// const
// const
// const
// const

getIp().then(function (response) {
  timezone.innerHTML = response.timezone;
});
