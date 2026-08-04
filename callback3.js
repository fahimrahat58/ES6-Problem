function callback(name,greet){
    console.log(greet('hello'),name);
}

function greet(text){
    return text;
}
callback('Rahat',greet);