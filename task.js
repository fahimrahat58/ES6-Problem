// problem-1

// const getFormattedPrice=prices=>{


//     const newPrice=prices.map(prices=>`$${prices}`);
//     return newPrice;
// }
// let numbers=[100,250,75];
// console.log(getFormattedPrice(numbers));
// console.log(numbers);


// problem-2

// const getAvailableProducts=products=>{

//     const stock=products.filter(productStock=>productStock.stock>0?true:false);
//     return stock;
// }
// console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] ))
// problem-3

// const findProductByName=(products,name)=>{
// if(!products.name===name){
//     return 'Undefined';
// }
// const result=products.find(product=>product.name===name?true:false);
// return result;

// }

// console.log(findProductByName(products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" ));

// problem-4

// const getTotalStockValue=(products)=>{

//     const total=products.reduce((Sum,num) =>num.price*num.stock+Sum,0);
//     return total;
// }

// console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }] ));

// problem-5

//  const products1 = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }];


// const  getDiscountedTotalForCategory=(products, category) =>{
// const result=products.map(elem=>elem).filter(product=>product.category===category).reduce((Sum,product)=>(product.price-(product.price/100*10)+Sum),0);

// return result;
// };
// const productList=products1;
// console.log(getDiscountedTotalForCategory(productList,category = "stationery" ));
// console.log(products1);


// problem-6

// function createIdGenerator(){
//     let count=0;


//     return function(call){
//         count++;
//         return count;
//     };
// };
// const nextId = createIdGenerator(); 
// console.log(nextId());
// console.log(nextId());
// console.log(nextId());


const  sortByPriceAscending=(products)=>{
const sort=products.sort((a,b)=>a.price-b.price);
return sort;
}


console.log(sortByPriceAscending([{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 
));