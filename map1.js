const discount=[200,300,400]

const discountPrices=(arr,discountRate)=>{
const result=arr.map(num=>{
   const discount=num-(num/100)*discountRate;
   return discount
}

);
return result
}


let discount1=discountPrices(discount,10)
console.log(discount1);
console.log(discount);
