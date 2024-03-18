async function picnicDecision() {
  // Write your code here
  try {
    let checkWeather = await new Promise((resolve, reject) => {
      const isSunny = Math.random() > 0.5;
      if (isSunny) {
        resolve("Let us go for picnic");
      } else {
        reject("Error: It is cloudy");
      }
    });
    console.log(checkWeather);
  } catch (err) {
    console.log("Error: It is cloudy");
  }
}
picnicDecision();

// Do not touch the code below:
// module.exports = { picnicDecision };
