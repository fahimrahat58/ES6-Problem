function customMap(callback){
    console.log(callback([1,2,3,4]));
}


function square(array){
    let numbers=[];
    for(const number of array){
        const result=number*number;
        numbers.push(result);
    }
    return numbers;
}
customMap(square)