function country(callback){
    console.log(callback())
}

function europe(text){
    let countries=['london','belgium','parague'];
    return countries;
}
country(europe);