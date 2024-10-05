// let array1 = [1,2,3,4,5];
// let array2 = [array1,6,7,8,9]
// // console.log(array1);
// console.log(array2)
// let array = [1,2,3,4]
// console.log(array)
// console.log(...array)

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9]
// let array = [...array1, ...array2]
// console.log(array)

// let originalArray = [1,2,3,4,5,[6,7]]
// let copiedArray = [...originalArray];
// copiedArray[5].push(8)
// console.log(originalArray)
// console.log(copiedArray)

// let originalArray = [1,2,3,4,5,[6,7]]
// // let copiedArray = JSON.parse(JSON.stringify(originalArray))
// let copiedArray = structuredClone(originalArray)
// copiedArray[5].push(8)
// console.log(originalArray)
// console.log(copiedArray)

// let str = "Spread";
// // console.log(str.split(""))
// console.log([...str])

// let obj1 = {a:1,b:2}
// let obj2 = {c:3,d:4}
// obj={...obj1,...obj2}
// console.log(obj)

// let originalObject = {a:1,b:2,add:{aa:11,bb:22}};
// originalObject.c=3;
// originalObject.d=4;
// // originalObject.name = "mahesh"

// let copiedObject = {...originalObject};
// copiedObject.add.cc=33;
// console.log(originalObject);
// console.log(copiedObject)

// let originalObject = {a:1,b:2,add:{aa:11,bb:22}};
// originalObject.c=3;
// originalObject.d=4;
// // originalObject.name = "mahesh"

// let copiedObject = JSON.parse(JSON.stringify(originalObject))
// copiedObject.add.cc=33;
// console.log(originalObject);
// console.log(copiedObject)

// function restFunction(...args){
//     console.log(args)
// }
// let arg= [ 1, 2, 3, 4 ]
// restFunction(...arg)

// let array = [1,2,3,4,5,[6,7]];
// array.push(8)
// console.log(array)
// let [a,b,c,d,e,[f,g],h] = array;
// console.log(f,g,h)

let object = { a: 1, b: 2, c: 3,add:{d:4,e:5} };

let { a, b, c,add:{d,e} } = object;
console.log(a,c,d);