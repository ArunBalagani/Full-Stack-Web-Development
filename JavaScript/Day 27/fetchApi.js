// let getPromise = new Promise(
//     (resolve,reject)=>{
//     resolve("This promise is successfull")
// }
// ).then(res=>console.log(res))
// console.log(getPromise)

console.log(fetch("",{}))
fetch("https://jsonplaceholder.typicode.com/todos",{
    // method:"POST",
    // headers:{
    //     "content-type":"application/json"
    // },
    // body:JSON.stringify({
    //     name:"Mahesh",
    //     age:20
    // })

}).then((res)=>{
    // console.log(res.json())
    if(res.status==200){
        console.log("Response is comming")
        return res.json()
    }else{
        console.log("Response is not coming")
    }
}).then((res)=>{
    console.log(res)
    res.map((data)=>{
        console.log(data.title)
        // document.getElementById("print").textContent = data.title;
       let titleTag= document.createElement("p")
    //    titleTag.textContent = data.title;
       titleTag.innerHTML = `<h2>${data.title}</h2>
       <h1>${data.id}</h1>
       <p>${data.completed}</p>

       `

       document.getElementById("print").appendChild(titleTag)


    })
}).catch((err)=>{
    console.log("This is failed",err)
})