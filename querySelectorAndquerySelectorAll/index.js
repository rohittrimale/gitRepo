const mainHeading = document.querySelector("#main-heading");

mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");

fruits.style.backgroundColor = "red";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

const basketHeading = document.querySelector("h2");

basketHeading.style.marginLeft = "30px";
basketHeading.style.color = "brown";

const fruitItem = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitItem.length; i++) {
  fruitItem[i].style.backgroundColor = "brown";
  fruitItem[i].style.padding = "10px";
  fruitItem[i].style.margin = "10px";
  fruitItem[i].style.borderRadius = "5px";
  fruitItem[i].style.color = "white";
}

const oddFruitItem = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < oddFruitItem.length; i++) {
  oddFruitItem[i].style.backgroundColor = "white";
  oddFruitItem[i].style.color = "black";
}
