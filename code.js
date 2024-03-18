// Write your code here:
function projectorPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let stock = true;

      if (stock) {
        resolve("Pizzas delivered at time");
      } else {
        reject("Error: Pizzas not delivered on time");
      }
    }, 1000);
  });
}

function pizzasPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pizzaDelivered = true;

      if (pizzaDelivered) {
        resolve("Pizzas delivered at time");
      } else {
        reject("Error: Pizzas not delivered on time");
      }
    }, 2000);
  });
}

function friendsPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let avaliable = true;

      if (avaliable) {
        resolve("Both friends available");
      } else {
        reject("Error: Both friends not available");
      }
    }, 3000);
  });
}

Promise.all([projectorPromise(), pizzasPromise(), friendsPromise()])
  .then((results) => {
    results.forEach((res) => {
      console.log(res);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// Do not touch the code below:
//   module.exports = { projectorPromise, pizzasPromise, friendsPromise };
