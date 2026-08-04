function cashRegister(){
    let cash=0;


    return function(payAble){
        cash+=payAble;
        return payAble;
    }

}

const coffeShop=cashRegister();
const resTaurant=cashRegister();
const superShop=cashRegister();

console.log('COFFE VILLA:',coffeShop(200));
console.log('SEA FOOD:',resTaurant(600));
console.log('GROCERY MART:',superShop(800));

