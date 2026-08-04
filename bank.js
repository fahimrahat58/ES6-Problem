function createBank(){
    let balance=1000;


    return function(deposit){
        balance+=deposit;
        return balance;

    }
}
const currentBalance=createBank();
console.log(currentBalance(500));