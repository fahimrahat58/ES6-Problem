function calculator(callback){
   
 console.log(callback(10,5));

}

function add(num1,num2){
    return num1+num2
}
calculator(add);
