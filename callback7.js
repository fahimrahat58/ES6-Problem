function transform(callback){
    console.log(callback([1,2,3,4]))
}


function double(arr){
    let arrr=[];
    for(const number of arr){
      const result=number*2;
      arrr.push(result);
    }
   return arrr;
}
transform(double);






