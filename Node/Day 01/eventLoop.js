// console.log("Event loop")

// console.log("Event 1")
// console.log("Event 2")
// console.log("Event 3")

// console.log("Event 1")
// for(let i = 0; i < 10; i++){
//     console.log(i)
   
// }
// console.log("Event 2")
// console.log("Event 3")

// console.log("Event 1")
// console.log("Event 2")

// function event3(){
//     event4()
//     console.log("Event 3")
// }

// function event4(){
//     console.log("Event 4")
// }

// event3()

console.log("Event 1")

setTimeout(()=>{
    console.log("Event 2")
},5000)

console.log("Event 3")