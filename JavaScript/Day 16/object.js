// var student = {
//     name:"Hema",
//     age:12,
//     isMarried:false,
//     greet:function(){}

// }
// console.log(student)

// var person = new Object();
// person.Name = "Mahesh";
// person.age = 20;
// person.greet = function(){}
// console.log(person)

// function Person(name,age){
//     this.Name = name;
//     this.age = age;
//     this.greet= function(){
//         // console.log("My Name is"+ " "+ this.Name)
//         return "My Name is"+ " "+ this.Name

//     }

// }
// var person = new Person("Hema",22);
// console.log(person.greet())

// var student = {
//     name:"Hema",
//     age:12,
//     isMarried:false,
//     greet:function(){
//         return "Hello Object"
//     }

// }
// console.log(student)
// console.log(student.name)
// console.log(student.age)
// console.log(student.greet())

// console.log(student["name"])
// console.log(student["age"])
// console.log(student["greet"]())

// var student = {
//     name:"Hema",
//     age:12,
//     isMarried:false,
//     greet:function(){
//         return "Hello Object"
//     }

// }

// var studentAge = "age";

// // console.log(studentAge)
// console.log(student[studentAge])

var student = {
    name: "Hema",
    age: 12,
    isMarried: false,
    greet: function () {
      return "Hello Object";
    },
    address: {
      houseNumber: 123,
      street: "Hyd",
    },
    contact: {
      phone: 123456,
      mail: "mahesh@gmail.com",
    },
  };
  // console.log(student["contact"]["phone"])
  // console.log(student.contact.phone)
  // for(var key in student){
  //     // console.log(key)
  //     // console.log(student[key])
  //     // console.log(student[key])
  //     // console.log(typeof student[key])
  //     if(typeof student[key] == "function"){
  //         console.log(student[key]())
  //     }
  
  // }
  
  // console.log(Object.keys(student));
  // console.log(Object.values(student));
  // console.log(Object.entries(student));