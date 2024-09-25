// var x = 1;

// while(x<5){
//     console.log(x);
//     x++;
// }

// x =1 => 1<5 => T
// x =1 => 1<5 => T
// x =1 => 1<5 => T
// x =1 => 1<5 => T
// x =1 => 1<5 => T
// x =1 => 1<5 => T
// x =1 => 1<5 => T

// x =1 => 1<5 => T
// x =2 => 2<5 => T
// x =3 => 3<5 => T
// x =4 => 4<5 => T
// x =5 => 5<5 => F

// var wheel = "start";
// var count = 0;
// while (wheel == "start") {
//   console.log("wheel has started");
//     count++;
//   if (count == 5) {
//     wheel = "stop";
//   console.log("wheel has stopped");

//   }
// }
// var x = 1
// do{
//     console.log(x)
//     x++;
// }
// while(x<5){
//     console.log(x);
// }

// var x = 1;

// while(x<5){
//     console.log(x , "while");
//     x++;
// }
// ----------------------------------

// for (var x = 0; x < 50; x++) {
// //   console.log(x, "for");
// // console.log(x%2==0)
// // 0%2 == 0
// // 0%2 == 0
// //  1%2 == 1
// //  2%2 == 0
// //  3%2 == 1
// //  4%2 == 0

// //   if(x%2==0){
// //     console.log(x)
// //   }
// }


// for(var i =0; i<10;i++){
//     console.log(i, "loop");
//     for(var j=0;j<2; j++){
//         console.log(j, "Nested Loop")
//     }
// }

// prime 0 50 

for(var i=0; i<50; i++){
    var count=0;
        if(i>2){
            // 2<3=> 3%2 = 1
            // 2<4 => 4%2==0
            // 2<5 => 5%2==1
    
            // count = 1
            for(var j=2; j<i; j++){
                if(i%j==0){
                    count++;
                }
            }
            if(count==0){
                console.log(i)
            }
        }
    }