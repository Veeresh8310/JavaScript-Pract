import {addItem,removeItem,getTotal} from './cart.js';
addItem("Macbook");
addItem("iphone");
addItem("airpods");
addItem("Samsung Ultra");
console.log(`Total items in the cart: ${getTotal()}`);

removeItem("Samsung Ultra");
console.log(`Total items in the cart: ${getTotal()}`);