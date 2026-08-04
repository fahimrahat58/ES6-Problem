// function createbank(initialBalance){
//     cash=initialBalance;




//     return function(action,amount){
//         if(action==='deposit'){
//             cash+=amount;
//         }
//         if(action==='withdraw'){
//             cash-=amount;
//         }
//         return cash;
//     }
// }

// const bank=createbank(1000);


// console.log(bank("deposit", 500));   // 1500
// console.log(bank("withdraw", 200));  // 1300
// console.log(bank("withdraw", 100));  // 1200



// function createPassword(adminPassword){
    


//     return function(loginPassword){
//         if(adminPassword===loginPassword){
//             return 'Access Granted';
//         }else{
//             return 'Access Denied';
//         }
//     }
// }
// const check=createPassword("abc123");
// console.log(check("abc123")); // Access Granted
// console.log(check("hello"));  // Access Denied



function createCalculator(number){
     let initial=number;
     return function(action,value){
    

          if(action==="add"){
           initial+=value
           return initial
    }if (action==="multiply") {
         initial*=value
           return initial
    }if(action==="subtract"){
          initial-=value
           return initial
    }if(action==="divide"){
          initial/=value
           return initial
    }if(action==="reset"){
        return initial
    }
}

}

const calc = createCalculator(10);

console.log(calc("add", 5));       // 15
console.log(calc("multiply", 2));  // 30
console.log(calc("subtract", 10)); // 20
console.log(calc("divide", 2));    // 10
console.log(calc("reset"));        // 10


    

