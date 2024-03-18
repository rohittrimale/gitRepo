function checkCar() {
  return new Promise((resolve, reject) => {
    const carReady = Math.random() > 0.5;
    if (carReady) {
      resolve("Car is ready");
    } else {
      reject("Error: Car needs maintenance");
    }
  });
}

function packForPicnic() {
  return new Promise((resolve, reject) => {
    const itemsPacked = Math.random() > 0.5;
    if (itemsPacked) {
      resolve("Packed everything for picnic");
    } else {
      reject("Error: Not have some essentials");
    }
  });
}
async function picnicReady() {
  // Write your code here
  try {
    const checksCar = await checkCar();
    const packForPicnics = await packForPicnic();
    console.log(checksCar);

    console.log(packForPicnics);
  } catch (error) {
    console.log(error);
  }
}
picnicReady();

// Do not touch the code below:
// module.exports = { picnicReady };
