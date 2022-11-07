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
  PizzaAmount ()
  if (this.toppings.includes(' salami')) {
    let amount = '$42';
    return amount;
  } else if (this.toppings.includes(' beef')) {
    let amount = '$41';
    return amount;
  } else if (this.toppings.includes(' mushrooms')) {
    let amount = '$40';
    return amount;
  }
}

Pizza.prototype.amount = function() {
  if (this.size === "large") {
    let amount = '$32';
    return amount;
  } else if(this.size === "medium") {
    let amount = '$28';
    return amount;
  } else if (this.size === "small") {
    let amount = '$25';
    return amount;
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
  let amount = newPizza.amount();
  order.addPizza(newPizza); 
  document.querySelector(".total-price").innerText = amount + (" ");
}


window.addEventListener("load", function() {
  this.document.querySelector("form#build-pizza").addEventListener("submit", handleSubmission)
  this.document.querySelector("form#build-pizza").addEventListener("submit", displayOrder)
});