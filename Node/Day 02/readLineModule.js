
// let readline = require('readline')
// console.log(readline)

// let rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.question("What is your name ? ",(ans)=>{
//     console.log(`Welcome ${ans} !`)
//     rl.close()
// })

// rl.on('line',(input)=>{
//     console.log(`You entered: ${input}`)
// })




let readline = require('readline')

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('what is your name ? ',(answer)=>{
    console.log(`welcome ${answer} `)
    rl.close()
})

rl.on('line', (input)=>{
    console.log(`Entered Data : ${input}`)
   
})