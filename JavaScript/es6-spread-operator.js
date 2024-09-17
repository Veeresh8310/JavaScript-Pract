const a=[1,2];
const b=[0,a,3];
console.log(b);

//spread operator in es6(useful for concatenation)
const electronics=['laptop','SmartPhone','Smartwatch'];
const grociers=['milk','Egg','Bread'];
const ShoppingCart=[...electronics,...grociers];
console.log(ShoppingCart);

