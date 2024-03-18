// Write your code here:

function checkCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let maintenance = Math.random() > 0.5;
      if (maintenance) {
        resolve("Car is ready");
      } else {
        reject("Error: Car needs maintenance");
      }
    }, 2000);
  });
}

function packForPicnic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let picnic = Math.random() > 0.5;

      if (picnic) {
        resolve("Packed everything for picnic");
      } else {
        reject("Error: Not have some essentials");
      }
    }, 1000);
  });
}

checkCar()
  .then((result) => {
    return packForPicnic;
  })
  .then((result) => {
    console.log("Go for picnic");
  })
  .catch((error) => {
    console.log("Picnic cancelled");
  });

// Do not touch the code below:
// module.exports = { checkCar, packForPicnic };
