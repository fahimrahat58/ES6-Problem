const students=[
{name:'Rahat',marks:65},
{name:'sajib',marks:59},
{name:'mukul',marks:68},
];
const getPassingStudent=(students,threshold)=>{
const result=students.filter(students=>{
    if(students.marks>=60){
        return true;
    }else
        return false;
}

)
return result;

}

const goodMrks=students
console.log(getPassingStudent(goodMrks,60));