// problem-1

// const formatUserNames=(users)=>{
// const result=users.map(elem=>elem.name.toUpperCase());
// return result;
// }

// const nameId=[
//   { name: "Rafi" },
//   { name: "Mim" },
//   { name: "Nayeem" }
// ];
// console.log(formatUserNames(nameId));
// console.log(nameId);


// problem-2

// const getPassedStudents=(students)=>{
// return students.filter(elem=>elem.marks>=60?true:false);

// }
// let studentsMarks=[
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 }
// ];
// console.log(getPassedStudents(studentsMarks));

// problem-3

// const findFirstExpensiveProduct=(products)=>{
// return products.find(elem=>elem.price>1000?true:false);

// }

// const productList=[
//   { name: "Mouse", price: 500 },
//   { name: "Monitor", price: 1200 },
//   { name: "Laptop", price: 50000 }
// ];

// console.log(findFirstExpensiveProduct(productList));

// problem-4

// const calculateTotalSalary=(employees)=>{
// return employees.reduce((sum ,num)=>num.salary+sum,0);

// }

// const employeeSalary=[
//   { name: "Rafi", salary: 20000 },
//   { name: "Mim", salary: 25000 },
//   { name: "Rahim", salary: 30000 }
// ];
// console.log(calculateTotalSalary(employeeSalary));
// console.log(employeeSalary);

// problem-5

// const getTotalElectronicsPrice=(products)=>{
// return products.filter(elem=>elem.category==='electronics').map(elem=>elem.price).reduce((sum,num)=>sum+num,0);

// }

// const electricPrice=[
//   { name: "Laptop", category: "electronics", price: 50000 },
//   { name: "Bag", category: "fashion", price: 1500 },
//   { name: "Mouse", category: "electronics", price: 1200 }
// ];

// console.log(getTotalElectronicsPrice(electricPrice));

// problem-6

// function createMultiplier(multiplier){


//     return function(num){
//         let result=multiplier*num;
//         return result;
//     }
// }

// const double = createMultiplier(2);
// console.log(double(5));
// console.log(double(10));

// problem-7

// const sortStudentsByMarks=(students)=>{
// return [...students].sort((a,b)=>b.marks-a.marks);


// }

// const studentsMarks=[
//   { name: "A", marks: 40 },
//   { name: "B", marks: 90 },
//   { name: "C", marks: 60 }
// ];
// console.log(sortStudentsByMarks(studentsMarks));
// console.log(studentsMarks);


// problem-8

// const increaseSalary=(employees, bonus)=>{
//  return employees.map(employee => ({
//     ...employee,
//     salary: employee.salary + bonus
//   }));
// };




// const empolyeeSalary=employees = [
//   { name: "Rafi", salary: 10000 }
// ];
// console.log(increaseSalary(empolyeeSalary,500));


