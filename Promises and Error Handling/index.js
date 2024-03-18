function checkWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let weather = Math.random() > 0.5;

      if (weather) {
        resolve("Let us go for picnic");
      } else {
        reject("Error: It is cloudy");
      }
    }, 3000);
  });
}

checkWeather()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Do not touch the code below:
//   module.exports = checkWeather;
