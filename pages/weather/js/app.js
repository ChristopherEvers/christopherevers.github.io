window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    '.temperature-description',
  );
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let icon = document.querySelector('.icon');
  let button = document.querySelector('.button');
  let unit = document.getElementsByTagName('span');

  button.addEventListener('click', () => {
    if (unit[0].textContent === '° F') {
      temperatureDegree.textContent = (
        ((temperatureDegree.textContent - 32) * 5) /
        9
      ).toFixed(0);
      unit[0].textContent = '° C';
    } else if (unit[0].textContent === '° C') {
      temperatureDegree.textContent = (
        (temperatureDegree.textContent * 9) / 5 +
        32
      ).toFixed(0);
      unit[0].textContent = '° F';
    }
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly?lang=en&hours=120&lat=${lat}&lon=${long}`;
      fetch(api, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          'x-rapidapi-key':
            '0b9b97bcecmsh03c284633a2ee9dp1ab800jsn6fedfe2034b0',
        },
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          const {temp, weather} = data.data[0];
          //set DOM elements to location
          temperatureDegree.textContent = ((temp * 9) / 5 + 32).toFixed(0);
          temperatureDescription.textContent = weather.description;
          locationTimezone.textContent = data.city_name;
          icon.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${weather.icon}.png">`;
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
});
