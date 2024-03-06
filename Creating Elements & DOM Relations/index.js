// 1. Inside the first Div, after the main heading add a sub-heading
// (h3 tag) "Buy high quality organic fruits online".

const divs = document.getElementsByTagName("div");
let firstDiv = divs[0];
let secondDiv = divs[1];
const heading3 = document.createElement("h3");
let headingText = document.createTextNode(
  "Buy high quality organic fruits online"
);
heading3.appendChild(headingText);
firstDiv.append(heading3);

// 2. Make the sub-heading text italic.
heading3.style.fontStyle = "italic";

// 2. Inside the second Div, before the unordered
// list add a paragraph tag showing "Total fruits: 4".
const para = document.createElement("p");
const paraText = document.createTextNode("Total Fruits: 4");
para.append(paraText);
// secondDiv.append(para);
const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(para, fruits);

// 3. On this paragraph tag set an id of "fruits-total".

paraText.id = "fruits-total";
