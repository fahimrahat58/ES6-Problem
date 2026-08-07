function createLifeCounter(){
    let life=3;



    return function(){
        if(life>0){
         life--
        }
        
        return life;
    }
}

const fahim=createLifeCounter();
console.log(fahim());
console.log(fahim());
console.log(fahim());
console.log(fahim());
console.log(fahim());