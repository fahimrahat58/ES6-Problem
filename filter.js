const numbers=[40,50,60,70,80];

const result=numbers.filter(function(items){
     if(items>=50){
        return items;
     }
});
console.log(result);