// function addT(a, b) {
//   console.log(a + b);
// }
// addT(1, 2);

// let addE = function (a, b) {
//   console.log(a + b);
// };
// addE(1, 4);

// let addArrow = (a, b) => {
//   console.log(a + b);
// };
// addArrow(1, 4);

// function(){}
// ()=>{}

// let oneLine = (a, b) =>  a + b;

// console.log(oneLine(2,6));

// let oneLine = a =>  a ;

// console.log(oneLine(2));

// function random(){
//     return Math.random()
// }
// console.log(random())

// let random =()=> Math.random()
// console.log(random())

// let student = {
//     name:"Mahesh",
//     getName:()=>{
//        return `My name is ${student.name}`
//     }
// }
// console.log(student.getName())

// let Person = (name)=>{
//     this.Name =name
// }
// let person1 = new Person("Mahesh")
// console.log(person1)

// function objArguments (){
//     for(i=0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// }
// objArguments(1,2,3,4,5)

// let objArguments = (...arguments) => {
//   for (i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };
// objArguments(1, 2, 3, 4, 5);

// let a = 5;
// let b = 10;
// function sayHello(sayHi){
//     console.log("Hello call back function...") 
//     // sayHi()
// }
// function sayHi(){
//     console.log("Hi This is second call back function...")
// }
// // sayHello(sayHi)
// function add(a,b, callBack,callBack2){
//     callBack();
//     setTimeout(function(){
//         callBack2()

//     },3000)
//     console.log(a+b)
// }
// add(a,b,sayHello,sayHi)


// let keyA =10;
// function outerRoomB(){
//     let keyB = 20;
//     function innerRoomC(){
//         let keyC=30;
//         console.log(keyA)
//         console.log(keyB)


//     }
//     // console.log(keyC)

//     innerRoomC()
// }
// console.log(keyB)

// outerRoomB()

// function outerFunction(){
//     let backPack = "Book"
//     function innerFuncion(){
//         console.log(backPack)
//     }
//    return innerFuncion()
// }
// let carrywithme = outerFunction()
// carrywithme


// function add(b){
//     let a =10;
//     function addIn(b){
//         console.log(a+b)
//     }
//     addIn(b)
// }
// add(3)

// // let call = add()
// // call(2)

function add(){
    let a = 5;
    function addIn(b){
        console.log(a+ b)
    }
    return addIn
}
let call = add()
call(2)