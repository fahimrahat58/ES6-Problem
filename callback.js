function student(cb){
    cb();
}

function studentlist(){
    studentinfo={
        name: "John Doe",       
        age: 20
    };
    return studentinfo;
}
function displayStudentInfo(){
    const student = studentlist();
    console.log(student.name);
    console.log(student.age);
}