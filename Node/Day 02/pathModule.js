
let path = require('path')

// console.log(path)

let filePath = path.join('folder','subfolder', 'example.js')

console.log(filePath)
console.log(path.extname(filePath))

if(path.extname(filePath) === '.txt'){
    console.log("This is a .txt file.")
}else{
    console.log("This is a .js file.")
}

let parsedData = path.parse(filePath)
console.log(parsedData)
console.log(parsedData.root)
console.log(parsedData.dir)
console.log(parsedData.base)
console.log(parsedData.ext)
console.log(parsedData.name)