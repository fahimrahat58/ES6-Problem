const shippingCharge=(amount,fee=60)=>{
if(amount>=1000){
    return "Free Shipping";
}else{
    return `Shipping Fee: ${fee} Taka`;
}

}

console.log(shippingCharge(1200));
console.log(shippingCharge(500));
console.log(shippingCharge(500,100));


