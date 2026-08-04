function registerStudent(cb){
   console.log('Student Is Registering,Need More Data',cb);
}

function student(){
  let studentInfo={
   name:'Fahim',
   roll:2,
   age:26
  };
  return studentInfo;
}

function past(){
   let pastInfo={
      hsc:4.78,
      ssc:5.00
   };
   return pastInfo;
}

registerStudent(student());
registerStudent(past(),student());