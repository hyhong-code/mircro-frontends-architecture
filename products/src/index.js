import faker from "faker";

let products = "";

// Generate a list of random product names
for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

// Display product list on screen
document.querySelector("#dev-products").innerHTML = products;
