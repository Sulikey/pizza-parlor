function Order() {
  this.pizzas = {}
} 
//{} is shorthand for creating an empty object.//

function Pizza (customerName, size, toppings = [], price) {
  this.customerName = customerName;
  this.size = size;
  this.toppings = toppings;
  this.pizzaAmount = price;
} 
//[] is shorthand for creating an empty array.//

Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.customerName] = pizza;
}

Order.prototype.findPizza = function(customerName) {
  if(this.pizzas[customerName] !== undefined) {
    return this.pizzas[customerName];
  }
  return false;
} 
//!== checks whether its two operands are not equal//


Pizza.prototype.amount = function() {
  if (this.size === 'large' && this.toppings.includes
  ('salami') || this.size === 'large' && this.toppings.includes
  ('beef') || this.size === 'large' && this.toppings.includes
  ('mushrooms')) {
    let amount = '$40';
    return amount;
  } else if (this.size === 'medium' && this.toppings.includes
  ('salami') || this.size === 'medium' && this.toppings.includes
  ('beef') || this.size === 'medium'&& this.toppings.includes
  ('mushrooms')) {
    let amount = '$35';
    return amount;
  } else if (this.size === 'small' && this.toppings.includes('salami') || this.toppings.includes('beef') || this.toppings.includes
  ('mushrooms')) {
    let amount = '$30';
    return amount;
  } else if (this.size === 'large') {
    let amount = '$35';
    return amount;
  } else if(this.size === 'medium') {
    let amount = '$30';
    return amount;
  } else if (this.size === "small") {
    let amount = '$25';
    return amount;
  } 
}
// UI 
let order = new Order

function displayOrder() {
  const customerName = document.getElementById("customer-name-input");
  const displayOrder = order.findPizza(customerName); 
  document.querySelector(".customer-name").innerText = displayOrder.customerName + (" "); document.querySelector(".pizza-size").innerText = displayOrder.size  + (" "); 
  document.querySelector(".pizza-toppings").innerText = displayOrder.toppings + (" ");
}

function handleSubmission(event) {
  event.preventDefault(); 
  const customerNameInput = document.getElementById("customer-name-input").value;
  const sizeInput = document.querySelector("select#size-select").value;
  const toppingsInputArray = []
  const toppingsInput = document.querySelectorAll('input[type=checkbox]:checked') 
  for (let i = 0; i < toppingsInput.lenght; i++) {
    toppingsInputArray.push(toppingsInput[i].value)
  }
  let newPizza = new Pizza(customerNameInput, sizeInput, toppingsInputArray);
  let amount = newPizza.amount();
  order.addPizza(newPizza); 
  document.querySelector(".total-price").innerText = amount + (" ");
}


window.addEventListener("load", function() {
  this.document.querySelector("form#build-pizza").addEventListener("submit", handleSubmission)
  this.document.querySelector("form#build-pizza").addEventListener("submit", displayOrder)
});