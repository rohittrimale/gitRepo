async function boardingBus() {
  try {
    const boardBusAt10 = await new Promise((resolve, reject) => {
      const busArrivesAt10 = Math.random() > 0.5;
      if (busArrivesAt10) {
        resolve("Board the bus");
      } else {
        reject("Error: Bus is late.");
      }
    });

    console.log(boardBusAt10);
  } catch (error) {
    console.log("Error: Bus is late");
  }
}
boardingBus();

// Do not touch the code below:
//   module.exports = { boardingBus };
