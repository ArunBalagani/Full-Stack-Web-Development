// export file

let studentData= () => {
     return "Welcome to student class"
}

// console.log(studentData())

// module.exports = studentData;

let student = {
    name : "Arun",
    age : 27,
    gender : "Male",
    role : "Mern-Stack-Developer"
}
// module.exports = student;
module.exports = {
    studentData,
    student
}
// --------------------------------------------------------
// Export File

// let studentData= ()=>{
    // return "Welcome to Node js Classes"
// }

// console.log(studentData())

// let student = {
    // name:'Hema',
    // age:10,
    // id:1
// }

// module.exports = studentData

// module.exports = student

// module.exports ={
    // studentData,
    // student
// }