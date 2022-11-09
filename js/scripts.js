function Order() {
  this.pizzas = {}
} 
//{} is shorthand for creating an empty object.//

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

Pizza.prototype.addToppings = function() {

  if (this.toppings.includes(' salami')) {
    this.pizzaAmount = '$42';

  } else if (this.toppings.includes(' beef')) {
    this.pizzaAmount = '$41';

  } else if (this.toppings.includes(' mushrooms')) {
    this.pizzaAmount = '$40';

  }
}

Pizza.prototype.amount = function() {
  if (this.size === "large") {
    this.pizzaAmount = '$32';
  } else if(this.size === "medium") {
    this.pizzaAmount = '$28';

  } else if (this.size === "small") {
    this.pizzaAmount = '$25';
  } 
}

//[] is shorthand for creating an empty array.//
function Pizza (customerName, size, toppings = [], price) {
  this.customerName = customerName;
  this.size = size;
  this.toppings = toppings;
  this.pizzaAmount = price;
} 

// UI 
let order = new Order

function displayOrder() {
  const customerName = document.getElementById("customer-name-input").value;
  const displayOrder = order.findPizza(customerName); 
  document.querySelector(".customer-name").innerText = displayOrder.customerName + (" "); 
  document.querySelector(".pizza-size").innerText = displayOrder.size  + (" "); 
  document.querySelector(".pizza-toppings").innerText = displayOrder.toppings + (" ");
}

function handleSubmission(event) {
  event.preventDefault(); 
  const customerNameInput = document.getElementById("customer-name-input").value;
  const sizeInput = document.querySelector("select#size-select").value;
  const toppingsInputArray = []
  const toppingsInput = document.querySelectorAll("input[name=topping]:checked"); 
  for (let i = 0; i < toppingsInput.length; i++) {
    toppingsInputArray.push(toppingsInput[i].value)
  }
  let newPizza = new Pizza(customerNameInput, sizeInput, toppingsInputArray);

  newPizza.amount();
  newPizza.addToppings();
  console.log(newPizza)
  order.addPizza(newPizza); 
  document.querySelector(".total-price").innerText = newPizza.pizzaAmount + (" ");
}


window.addEventListener("load", function() {
  this.document.querySelector("form#build-pizza").addEventListener("submit", handleSubmission)
  this.document.querySelector("form#build-pizza").addEventListener("submit", displayOrder)
});
