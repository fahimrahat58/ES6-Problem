// problem-1

// const totalDiscountCalculator=(priceCart)=>{
//     return priceCart.map(elem=>elem-5).reduce((sum,elem)=>elem+sum,0);

// }


// console.log(totalDiscountCalculator([100,250,80]));
// console.log(totalDiscountCalculator([50]));

// problem-3

// const employee={
//     name:'Jodu',
//     age:25,
//     department:'Marketing'
// };

// const newEmployee=(obj)=>{

//     if(typeof obj !=='object'){

//         return 'Invalid';
//     }
// return `My name is ${obj?.name}.I am ${obj?.age} years old.I work in ${obj?.department}`;


// }

// console.log(newEmployee(employee));

// problem-3

// const orderIds={
//     orderId: "A1",
//     total:500,
//     customer:"Mim"
// };

// const couponApplier=(object,discount)=>{
// return{
//     ...object,
//     total:object.total-(object.total*10/100)
// };

// };

// console.log(couponApplier(orderIds,10));
// console.log(orderIds);

// problem-4

// const stockManagement=[
//     {name:'Shirt',inStock:true},
//     {name:'Shoes',inStock:false},

// ];

// const checkStock=(obj)=>{
// return obj.filter(elem=>elem.inStock===true);


// }

// console.log(checkStock(stockManagement));


// problem-5

// const topScorer=[
//     {name:"rafi",score:80},
//     {name:"sadia",score:55},
//     {name:"karim",score:70},
//     {name:"nafis",score:65},
//     {name:"rahat",score:60}
// ];

// const findAbove60=(arr)=>{
// return arr.filter(Elem=>Elem.score>=60?true:false).map(elem=>elem.name.toUpperCase());
// }
// console.log(findAbove60(topScorer));
// console.log(topScorer);
 
// problem-6

const countS="Great session today @rafi @sadia @karim"

const countMention=(caption)=>{
    const result=caption.split(' ');
    const filtered=result.filter(elem=>elem.startsWith("@"));
    let largest=filtered[0];
    filtered.forEach(element => {
        if(element.length>largest.length){
           largest=element; 
            
        }
    });
    
return largest;
}
console.log(countMention(countS));
