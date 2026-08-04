function orderFood(callback){
    console.log(callback('preparing food...'),('food delivered'));
}

function delivered(text){
    return text;
}
function delivered2(text){
    return text;
}


orderFood(delivered);
orderFood(delivered2);