function createCounter(){
    let count=0


    return function(){
        count++
        return count;
    }
}

const cofeeShop=createCounter();

console.log(cofeeShop())
console.log(cofeeShop())
console.log(cofeeShop())
console.log(cofeeShop())