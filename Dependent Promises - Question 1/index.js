// Write your code here:

function orderFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let foodDelivered = Math.random() > 0.5;
      if (foodDelivered) {
        resolve("Food delivered");
      } else {
        reject("Food not delivered");
      }
    }, 2000);
  });
}

function orderDessert() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let desertDeliverd = Math.random() > 0.5;
      if (desertDeliverd) {
        resolve("Dessert delivered");
      } else {
        reject("Dessert not delivered");
      }
    }, 2000);
  });
}

orderFood()
  .then((result) => {
    console.log(result);

    return orderDessert();
  })
  .then((dessertMsg) => {
    console.log(dessertMsg);
    console.log("Dream meal failed");
  })
  .catch((error) => {
    console.log(error);
    console.log("Dream meal failed");
  });

//   // Do not touch the code below:
//     module.exports = {
//       orderFood,
//       orderDessert,
//     };
