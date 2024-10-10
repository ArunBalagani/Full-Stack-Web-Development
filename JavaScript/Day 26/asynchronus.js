// console.log("This is one")
// setTimeout((a, b)=>{
//     console.log("This is two ", a, b)
// },3000,"Hema","Coding")
// console.log("This is three")

// let stopInterval = setInterval(()=>{
// console.log("This is four")

// },1000)

// setTimeout(()=>{
//     clearInterval(stopInterval)
// },5000)

// let orderCake=(callback)=>{
//     callback()
//     console.log("Cake is ordered")
// }
// let houseDecorate=(callback)=>{
//     console.log("House is decorating")
//     callback()
// }
// let inviteFriends =(callback)=>{
//     console.log("Inviting Friends")
//     callback()
// }
// let orderFood = ()=>{
//     console.log("Odered Food")
// }

// orderCake(()=>{
//     houseDecorate(()=>{
//         inviteFriends(()=>{
//             orderFood()
//         })
//     })
// })

// let getPromise = new Promise((resolve,reject)=>{
//     // resolve("Promise is successfull")
//     reject("Promise is failed")
// })
// // getPromise.then((response)=>{
// //     console.log(response)
// // })
// getPromise.catch((response)=>{
//     console.log(response)
// })
// console.log(getPromise)

// let orderCake = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Cake is ordered succesfully")
//     resolve("Cake is ordered succesfully");
//   });
// };

// let houseDecorate = (message) => {
//     return new Promise((resolve,reject)=>{
//         console.log("House decorate is completed")
//         resolve("House decorate is completed")
//     })
// };
// let inviteFriends = (message) => {
//   return  new Promise((resolve,reject)=>{
//     console.log("Invited friends")
//         resolve("Invited friends ")
//     })
// };
// let orderFood = () => {
//     return new Promise((resolve,reject)=>{
//         resolve("Food order is cancelled")
//     })
// };
// // let getOrder = orderCake()
// // console.log(getOrder)
// orderCake().then(houseDecorate).then(inviteFriends).then(orderFood).then((res)=>{
//     console.log(res)
// })

// orderCake().then((response) => {
//   console.log(response);
// });

// houseDecorate().then((response)=>{
//     console.log(response)
// })

// inviteFriends().then((res)=>{
//     console.log(res)
// })
// orderFood().catch((res)=>{
// console.log(res)
// })
//  async and await
let orderCake = () => {
    return new Promise((resolve, reject) => {
     
        console.log("Cake is ordered succesfully");
        resolve("Cake is ordered succesfully P");
  
    });
  };
  console.log(orderCake())
  
  let orderCakeA = async() => {
      return "Cake is ordered succesfully A"
    };
  
  console.log(orderCakeA())
  // let houseDecorate=()=>{
  //     console.log("House is decorating")
  // }
  // let planParty = async () => {
  //   await orderCake();
  //   houseDecorate()
  // };
  // planParty();