let cart=[
{name:'pen',price:5,qty:10},
{name:'notebook',price:50,qty:2},
{name:'pencil',price:5,qty:10},
];


const totalPrice=cart=>{
const total= cart.reduce((accumulator,element)=>{
return accumulator+=element.price*element.qty;
},0)
return total;
}

console.log(totalPrice(cart));









