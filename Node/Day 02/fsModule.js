let fs = require('fs')

// console.log(fs)

fs.writeFile("test.txt", "This is a test file", (err)=> {
    if(err){
        console.error(err)
        return
    }
    console.log("File is created successfully")
})

fs.readFile('test.txt','utf8', (err, data)=> {
    if(err){
        console.log(err)
        return;
    }
    console.log("File is Read successfully...",data)
})

fs.unlink('test.txt',()=>{
    console.log("File is Deleted successfully...")
})