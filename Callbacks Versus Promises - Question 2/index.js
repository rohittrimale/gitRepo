// Write your code here:

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Water boiled");
    }, 2000);
  });
}

function addCoffeePowder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Added coffee powder");
    }, 500);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Brewed coffee");
    }, 1000);
  });
}

function haveCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Enjoying my coffee");
    }, 3000);
  });
}

boilWater().then((res) => {
  console.log(res);
  addCoffeePowder().then((res) => {
    console.log(res);
    brewCoffee().then((res) => {
      console.log(res);
      haveCoffee().then((res) => {
        console.log(res);
      });
    });
  });
});

// Do not touch the code below:
//   module.exports = {
//     boilWater,
//     addCoffeePowder,
//     brewCoffee,
//     haveCoffee,
//   };
