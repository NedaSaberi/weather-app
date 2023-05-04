const timezone = document.querySelector(".timezone");
const icon = document.querySelector(".icon");
// const iconImage = document.querySelector('.icon img')
const degreeSection = document.querySelector(".degree-section");
const degree = document.querySelector(".degree");
const degreeType = document.querySelector(".degree-type");
const tempDescription = document.querySelector(".temperature-description");

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
  .then((ipData) => {
    timezone.textContent = ipData.timezone;
    getWeather(ipData.lat, ipData.lon)
      .then((weatherData) => {
        console.log(weatherData);
        tempDescription.textContent = weatherData.weather[0].description;
        var weatherMain = weatherData.weather[0].main;
        // return weatherData.weather[0].main; ///error cause
        let temp = getTemp(weatherData.main.temp);
        console.log(temp);
        degree.textContent = temp.kel;
        degreeType.textContent = "k";
        degreeSection.addEventListener("click", function () {
          if (degreeType.innerHTML === "k") {
            degreeType.textContent = "c";
            degree.textContent = temp.ca;
          } else if (degreeType.innerHTML === "c") {
            degreeType.textContent = "f";
            degree.textContent = temp.fa;
          } else if (degreeType.innerHTML === "f") {
            degreeType.textContent = "k";
            console.log(temp);
            degree.textContent = temp.kel;
          }
        });
        
        const iconName = getIcon(weatherMain);
        console.log(iconName);
        icon.innerHTML = `<img src="./images/${iconName}" alt="">`;
      })
      .catch(function () {
        console.log("false");
      });
  })
  .catch(function () {
    console.log("There is no response, Try later ...");
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
//   switch (weatherMain) {
//     case "Clouds":
//       icon = `${weatherMain}.svg`;
//       break;
//     case "Rain":
//       icon = `${weatherMain}.svg`;
//       break;
//     case "Clear":
//       const dayNight = getDayOrNight();
//       icon = `${weatherMain}-${dayNight}.svg`;
//       break;
//     case "Snow":
//       icon = `${weatherMain}.svg`;
//       break;
//     case "Drizzle":
//       icon = `${weatherMain}.svg`;
//       break;
//     case "Thunderstorm":
//       icon = `${weatherMain}.svg`;
//       break;
//     // case "Atmosphere":
//     //   icon = `${weatherMain}.svg`;
//     //   break;
//   }
    if(weatherMain === "Clear"){
      const dayNight = getDayOrNight();
      icon = `${weatherMain}-${dayNight}.svg`;
    }else{
        icon = `${weatherMain}.svg`;
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
