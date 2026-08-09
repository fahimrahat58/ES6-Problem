// problem-1

// const peopleS=[
//   { name: "Rafi", age: 20 },
//   { name: "Mim", age: 16 },
//   { name: "Nayeem", age: 25 }
// ];

// const adultPeople=(arrOfObject)=>{
// return arrOfObject.filter(elem=>elem.age>=18?true:false);
// };

// console.log(adultPeople(peopleS));


// problem-2

// const peopleS=[
//   { name: "Rafi", age: 20 },
//   { name: "Mim", age: 18 },
//   { name: "Sadia", age: 22 }
// ];

// const peopleName=arrofObject=>{
// return arrofObject.map(elem=>elem.name);
// }

// console.log(peopleName(peopleS));

// problem-3

// const studentsMarks=[
//   { name: "A", marks: 70 },
//   { name: "B", marks: 80 },
//   { name: "C", marks: 90 }
// ];

// const studentObtainedMarks=arr=>{
// const total= arr.reduce((sum,num)=>num.marks+sum,0);
// return total;
// }
// console.log(studentObtainedMarks(studentsMarks));

// problem-4

// const productList=[
//   { id: 1, name: "Pen", price: 10 },
//   { id: 2, name: "Bag", price: 500 },
//   { id: 3, name: "Book", price: 100 }
// ];

// const findProduct=(arr,id)=>{
// return arr.find(elem=>elem.id===id);
// }

// console.log(findProduct(productList,2));

// problem-5

// const price=[
//   { name: "Pen", price: 10 },
//   { name: "Bag", price: 500 },
//   { name: "Book", price: 80 }
// ];

// const lowerPrice=arr=>{
// return arr.filter(elem=>elem.price<100);

// }

// console.log(lowerPrice(price));

// problem-6

// const totalPayable=[
//   { product: "Pen", price: 10, quantity: 5 },
//   { product: "Bag", price: 500, quantity: 2 },
//   { product: "Book", price: 100, quantity: 3 }
// ];

// const customerPayable=arr=>{
// const total= arr.reduce((sum,num)=>(num.price*num.quantity)+sum,0);
// return `Total Payable: ${total}`
// }

// console.log(customerPayable(totalPayable));

// problem-7

// const topScorer=[
//   { name: "A", marks: 50 },
//   { name: "B", marks: 90 },
//   { name: "C", marks: 70 }
// ];

// const topStudents=arr=>{
// return [...arr].sort((a,b)=>b.marks-a.marks);

// }

// console.log(topStudents(topScorer));
// console.log(topScorer);

// problem-8

// const topStudents=[
//   { name: "Rafi", marks: 80 },
//   { name: "Mim", marks: 45 },
//   { name: "Nayeem", marks: 60 },
//   { name: "Sadia", marks: 30 }
// ];

// const topScorer=arr=>{
// return arr.filter(elem=>elem.marks>=60).map(elem=>elem.name);

// }

// console.log(topScorer(topStudents));

// problem-9

// const discount=[
//   { name: "Bag", price: 1000 },
//   { name: "Shoes", price: 2000 }
// ];

// const afterDiscount=(arr,dis)=>{

//     const result=arr.map(elem=>({
//       ...elem,
//       price:elem.price-(elem.price*dis/100)

//     }));
//    return result;
    
// };

// console.log(afterDiscount(discount,20));



// problem-10


// function createCounter(){
//   let count=0;


// return function(){
//     count++
//     return count;
// }

// }

// const counter2=createCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// problem-11

// const studentsPostion=[
//   { name: "Rafi", marks: 75 },
//   { name: "Mim", marks: 45 },
//   { name: "Nayeem", marks: 90 },
//   { name: "Sadia", marks: 65 }
// ];

// const studentMarks=arr=>{
//  return arr.filter(elem=>elem.marks>60).map(elem=>elem).sort((a,b)=>b.marks-a.marks);

// }
// console.log(studentMarks(studentsPostion));

// problem-12

// const product= [
//   { name: "Pen", category: "stationery", price: 10, stock: 5 },
//   { name: "Bag", category: "fashion", price: 500, stock: 2 },
//   { name: "Book", category: "stationery", price: 100, stock: 3 }
// ]

// const total=(arr,categories)=>{
//   return arr.filter(elem=>elem.category===categories).reduce((sum,num)=>sum+(num.price*num.stock),0);
// }

// console.log(total(product,"stationery"));

// problem-13

// const productlist=[
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 12000 },
//   { name: "Laptop", price: 50000 }
// ];

// const expensiveProduct = (arr) => {
//   return arr.reduce((highest, elem) => {
//     return elem.price > highest.price ? elem : highest;
//   });
// };


// console.log(expensiveProduct(productlist))

// problem-14

// const productOfDiscount=[
//   { name: "Pen", price: 100 },
//   { name: "Bag", price: 1000 },
//   { name: "Shoes", price: 2000 },
//   { name: "Book", price: 300 }
// ];

// const result=(arr)=>{
// return arr.filter(elem=>elem.price>500).map(elem=>({
//  ...elem,
//  price:elem.price-(elem.price*15/100)
// }));

  
// }

// console.log(result(productOfDiscount));
// console.log(productOfDiscount);

// problem-15

const bestProduct=[
  { name: "Pen", rating: 3.5 },
  { name: "Bag", rating: 4.2 },
  { name: "Shoes", rating: 4.8 },
  { name: "Book", rating: 4.1 }
];

const findBest=(arr)=>{
    
return arr.filter(elem=>elem.rating>=4).reduce((highest,elem)=>{

    return elem.rating>highest.rating?elem:highest;
});

};

console.log(findBest(bestProduct));