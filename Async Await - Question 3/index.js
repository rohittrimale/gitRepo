function orderPizza() {
  return new Promise((resolve, reject) => {
    const pizzaDelivered = Math.random() > 0.5;
    if (pizzaDelivered) {
      resolve("Pizza has been delivered!");
    } else {
      reject("Pizza delivery failed.");
    }
  });
}
function orderDessert() {
  return new Promise((resolve, reject) => {
    const dessertDelivered = Math.random() > 0.5;
    if (dessertDelivered) {
      resolve("Dessert has been delivered!");
    } else {
      reject("Dessert delivery failed.");
    }
  });
}
async function happyMeal() {
  // Write your code here
  try {
    const orderPizz = await orderPizza();

    const orderDess = await orderDessert();
    console.log(orderPizz);

    console.log(orderDess);
  } catch (err) {
    console.log(err);
  }
}

happyMeal();

// Do not touch the code below:
//   module.exports = { happyMeal };
