let numbers=[1,2,3,4,5,6,7];
let strings=new Array('veeresh','akash','banu','hari','shyam','charan','karan','karthik','om','pavankumar');
// console.log(numbers,strings);

//methods supported by arrays
//forEach: loops over each element of the array
// numbers.forEach(element => console.log(element));

//filter() : Filters out the element that don't match the condition
// let evennumbers=numbers.filter(num=> num%2===0);
// console.log(evennumbers);
let str=strings.filter(elem=>elem.length>6);
console.log(str);