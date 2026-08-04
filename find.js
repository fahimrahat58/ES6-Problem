const numbers=[1,2,3,4,500,501,502];


const result=numbers.find(function(num){
       if(num>500){
        return num;
       }
});
console.log(result);