// let a = 4;
// let b = 5;

// let results =(value)=>{
//     console.log(`This is the result value ${value}`)
// }
// let add =(a,b,results)=>{
//     results(a+b)
//     console.log(a+b)
//     return ()=>console.log("This is returend HOF ")
    
// }
// let call = add(1,2,results)
// call()

// results ==>CB
// add ==>HOF

// -----------------------------
// let numbers = [1,2,3,4,5]
// let double = []
// for(let i = 0; i<numbers.length;i++){
//     console.log(numbers[i]*2)
//     double.push(numbers[i]*2)
// }
// console.log(double)


// let numbers1 = [1000,2001, 3003,4000,5000]

// let num = 3
// let doubleArray = numbers1.map((currentValue,index,array)=>{
//     // console.log(currentValue*2)
//     // console.log(index)
//     // console.log(array)
//     return  currentValue%2 ===0
// })
// console.log(doubleArray)

// let doubleArray = numbers.map(curVal =>curVal*2)
// console.log(doubleArray)


// let numbers = [1000,2001, 3003,4000,5000]

// let evenNumbersArray = numbers.filter((currentValue,index,array)=>{
//     // console.log(currentValue)
//     // console.log(index)
//     // console.log(array)
//     // console.log(currentValue%2 ===0)
//     return currentValue%2 ===0
// })
// console.log(evenNumbersArray)

// let numbers = [1,2,3,4,5]

// let reduceArray = numbers.reduce((accumulator,currentValue,index,array)=>{
//         // console.log(accumulator, "Acc")
//     console.log(currentValue, "CurVa")
//     // console.log(accumulator + currentValue, "Sum")
//     // console.log(index)
//     // console.log(array)
//     // return accumulator
//     return accumulator + currentValue
// },6)
// console.log(reduceArray)
// let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// even => even*2 => sum even

// let evenArray = arrayNumbers.filter((curVal)=>{
//     // console.log(curVal%2===0)
//     return curVal%2===0
// })
// console.log(evenArray)
// let doubleArray = evenArray.map((curVal)=>{
//     // console.log(curVal*2)
//     return curVal*2
// })
// console.log(doubleArray)

// let singleValue = doubleArray.reduce((acc,curVal)=>{
//     // console.log(acc+curVal)
//     return acc+curVal
// })
// console.log(singleValue)

// let evenArray = arrayNumbers.filter(curVal=>curVal%2===0).map(curVal=> curVal*2).reduce((acc,curVal)=>acc+curVal)
// console.log(evenArray)


// let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// let forEachArray = arrayNumbers.forEach((currentValue,index,array)=>{
//     console.log(currentValue)
//     // console.log(index)
//     // console.log(array)

//     return currentValue
// })
// console.log(forEachArray)

// console.log(arrayNumbers.includes(15))
let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]

// let someArray = arrayNumbers.some((val)=>{
//     // console.log(val>5)
//     return val>5
// })
// console.log(someArray)
// let someArray = arrayNumbers.every((val)=>{
//     // console.log(val>5)
//     return val>5
// })
// console.log(someArray)