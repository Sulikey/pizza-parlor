function Order() {
  this.pizzas = {}
} 
//{} is shorthand for creating an empty object.//

function Pizza (name, size, toppings = [], price) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = price;
} 
//[] is shorthand for creating an empty array.//

Order.prototype.addPizza = function(pizza) {
  this.pizzas[this.pizzas.name] = pizza;
}

Order.prototype.locatePizza = function(name) {
  if(this.pizzas[name] !== undefined) {
    return this.pizzas[name];
  }
  return false;
} //!== checks whether its two operands are not equal//


Pizza.prototype.price = function() {
  if (this.size === 'large' && this.toppings.includes
  ('salami') || this.size === 'large' && this.toppings.includes
  ('beef') || this.size === 'large' && this.toppings.includes
  ('mushrooms')) {
    let price = '$40';
    return price;
  } else if (this.size === 'medium' && this.toppings.includes
  ('salami') || this.size === 'medium' && this.toppings.includes
  ('beef') || this.size === 'medium'&& this.toppings.includes
  ('mushrooms')) {
    let price = '$35';
    return price;
  } else if (this.size === 'small' && this.toppings.includes('salami') || this.toppings.includes('beef') || this.toppings.includes
  ('mushrooms')) {
    let price = '$30';
    return price;
  } else if (this.size === 'large') {
    let price = '$35';
    return price;
  } else if(this.size === 'medium') {
    let cost = '$30';
    return price;
  } else if (this.size === "small") {
    let price = '$25';
    return price;
  }
}