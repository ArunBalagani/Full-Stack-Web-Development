// // 2 + 5 = 7
// var num1 = 2;
// var num2 = 5 ;
// var sum = num1 + num2;
// console.log(sum)

// -----------------------------------------------------------------

// // 20 + 10 = 30
// var num1 = 20;
// var num2 = 30;
// var sum = num1 + num2;
// console.log(sum)

// ----------------------------------------------------------------------

// var num1 = 25;
// var num2 = 30;
// var sum = num1 + num2;
// console.log(sum)

// --------------------------------------------------------------------

// function addFunction(num1,num2){
//     console.log(num1 + num2)

// }
// addFunction(2,5)
// addFunction(20,30)
// addFunction(25,30)

// ------------------------------------------------------------------

// juiceMixer("Apple")
// function juiceMixer(fruitA){
//     console.log("Juice of ", fruitA)

// }

// juiceMixer("Graphs")

// var juiceMixer = function(fruit){
//     console.log(fruit, "Juice")
// }

// console.log(msg)
// var msg = "Hello Function";


// function juiceMixer(fruitA){
//     console.log("Juice of ", fruitA);
//     return "Juice of ", fruitA;

// }
// juiceMixer("Graphs")

// (function(name){
//     console.log(name)
// })("Hema")


// palidrome 

// eye, racecar, madam

// function palidrome(string){
//     console.log(string)
//     var stringRevese =   string.split("").reverse().join("")
// console.log(stringRevese)

// if(stringRevese == string){
//     console.log("This is Palindrome", string)
// }
// else{
//     console.log("This is not a Palindrome", string)

// }
// }
// palidrome("racecar")

// fabinnaci
// 0,1,2,3,4,5
// 1,2,3,5,8,12



// for(var i=0; i<5; i++){
//     sum = a +b;
//     // console.log(sum)
//     a = b;
//     // console.log(b)
//     b = sum;
//     console.log(b)
// }
// 1,2,3,4,5

// a =0, b= 1 => sum = 1 => a=1, b =1;
// a=1, b =1  => sum = 1+1 =2 => a=1,b=2;
// a=1,b=2 => sum = 3 => a= 2, b= 3
// a=2,b=3 => sum = 5 => a= 3, b= 5
function fabinnaci(v) {
    var a = 0;
    var b = 1;
    var sum = 0;
    // console.log(v)
    for (var i = 0; i < v; i++) {
        sum = a + b;
        // console.log(sum)
        a = b;
        b = sum;
        // v= sum;
        console.log(b)
    }
}
fabinnaci(50)