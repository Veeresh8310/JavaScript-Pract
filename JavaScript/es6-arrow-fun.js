//regular function
// function add(num1,num2)
// {
//     return num1+num2;
// }
// console.log(add(10,20));

//arrow function in es6
// const add=(a,b)=>a+b;
// console.log(add(30,20));

class Cart
{
    constructor ()
    {
        this.items=['apple','banana','orange','kiwi'];
    }
    //lets write function to display
    showItems()
    {
        // this.items.forEach(function(item) {
        //     console.log(this);//this will print undefined
        this.items.forEach((item)=>{
            console.log(this);
        });
    }
}
const cart=new Cart();
cart.showItems();

//Implicit returns 
const posts=[
{id:1, title:'First Post',likes:60},
{id:2, title:'second Post',likes:30},
{id:3, title:'third Post',likes:50},
];
const getpopularpost=()=>posts.filter(
    post=>post.likes >40);
    console.log(getpopularpost());
