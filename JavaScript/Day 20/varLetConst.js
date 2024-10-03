// Var Let Const
// Scope
// 1.Function Scope and Block Scope
// var => function Scope
// let and const => Block Scope
// function Scope(){
//     var a1 = 5;
//     let b1 = 15;
//     if(true){
//         var a = 10;
//         let b = 20;
//         const c = 30;
//         // console.log(a)
//         // console.log(b)
//         // console.log(c)
//         // console.log(a1)
//         // console.log(b1)
//     }
//     console.log(a);
//     console.log(b);
//     // console.log(c)

// }
// Scope()

// 2. Hosting

// console.log(a)
// var a =5;
// console.log(b)
// let b;
// console.log(c)
// const c;

// 3. TDZ

// console.log(a)
// let a = 5;

// 4. Re-declaration

// var a =10;
// var a = 20;
// console.log(a)

// let a = 10;
// let a = 50;
// console.log(a)

// const q = 20;
// const q = 30;
// console.log(q)

// 5. Re- assignment

// var a = 10;
// a = 20;
// console.log(a);

// let a = 20;
// a = 10;
// console.log(a)

// const a = 10;
// a = 20;
// console.log(a);


// let name = "Mahesh";
// console.log(`${name}`)
// let age = 20;

// console.log("My name is " + name + " and age is " + age);
// console.log(`My name is ${name} and age is ${age}`)
// let str = "My name is Mahesh 
// and age is 20";
// let str = `My name 
// is Mahesh 
// and age is 20`;
// console.log(str);

// let a = Symbol("Mahesh")
// console.log(a);
// let email = Symbol();
// let student = {};
// student.name = "mahesh",
// student.age = 12,
// student[email] = "mahesh@gmail.com"
// console.log(student)
// console.log(Object.keys(student))

// for(let key in student){
//     console.log(key)
// }

// let set = new Set([1,1,2,2,5,5,7,6])
// let set = new Set()
// set.add(2)
// set.add(4)
// set.add(5)
// set.add(6)
// set.delete(5)
// set.clear()
// let check = set.has(5)
// console.log(set)
// console.log(check)


let map = new Map();
map.set("name","Mahesh")
map.set(1,"One")
// console.log(map)
// console.log(map.get("name"))
// console.log(map.has(1))
map.delete(1)
console.log(map.has(1))

console.log(map)