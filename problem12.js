const grade=(marks)=>{
    if(marks>=90){
        return 'A+';
    }else if(marks>=80){
        return 'A';
    }else if(marks>=60){
        return 'B';
    }else{
        return 'Fail';
    }
}

console.log(grade(95))
