
// Create shopping list
var s_list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

// Add fruit loops
s_list.push("fruit loops");

// Replace coffee w/ fair trade coffee
s_list[s_list.indexOf("coffee")] = "fair trade coffee";

// Replace chips and salsa w/ rice and beans
s_list.splice(2,3,"rice","beans");

// Create shopping cart, add last and first item from shopping list
s_cart = [];
s_cart.push(s_list.pop());
s_cart.push(s_list.shift());

// While loop
while (s_list.length > 0) {
  s_cart.push(s_list.pop());
}

// Sorted alphabetically backwards
s_cart.sort().reverse();

console.log(s_cart.join(", "))
