import faker from "faker";

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} in your cart.</div>`;
  element.innerHTML = cartText;
};

// Check for dev enviroment
if (process.env.NODE_ENV === "development") {
  // Check for local execution context
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

// For container app in prod enviroment
export { mount };
