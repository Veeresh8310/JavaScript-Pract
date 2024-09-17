// const todo=["buy groceries","complete Assignments","prepare for placements"];//structuring of object

// //lets use to extract individual objects
// const [firsttask, secondtask, thirdtask]=todo;
// console.log(firsttask);
// console.log(secondtask);
// console.log(thirdtask);

//object destructuring
// const product={name:"Laptop", price:30000, brand:"Macbook"};
// const{name, price,brand}=product;
// console.log(name);
// console.log(price);
// console.log(brand);

//Destructuring with default values
// const user={uname:"Azat",age:8};
// const {uname,age,email="No email provoder"}=user;
// console.log(unmae);
// console.log(age);
// console.log(email);

//Destructuring Nested Objects and Array
const response=
{
    status : 200,
    data:{
        user:{
            usrname:"Azat",
            address:{
                city:"Bijapur",
                country:"India",
            }
        }
    }
}
const {data:{user:{usrname, address:{city,country}}}}=response;
console.log(usrname);
console.log(city);
console.log(country);
