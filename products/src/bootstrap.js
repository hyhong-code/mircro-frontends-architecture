import faker from "faker";

const mount = (element) => {
  let products = "";

  // Generate a list of random product names
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  // Display product list on screen
  element.innerHTML = products;
};

// Subapp(remote) execution contextes:

// Context/Situation #1
// We are running this file in development in isolation
//    using local index.html file
//    DEFNITELY has en element with id `dev-products`
//    So we CAN immediately render our app into that element

// NODE_ENV get set automatically by webpack
if (process.env.NODE_ENV === "development") {
  // Only local index.html has a div with `#dev-products`
  const el = document.querySelector("#dev-products");

  // Check if subapp is running in isolation
  if (el) {
    // We are running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in dev/prod in container app
//    No garranty a div with id `dev-products` exists
//    So we CANNOT immediately render our app into that element
export { mount };
// Expost a mount function to let container decide when to call mount and render the subapp
