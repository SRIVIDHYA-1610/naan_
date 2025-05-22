// let a=10
//  var b=20;
// scope of variable:
// global and local
// {
//     {
//         const a=10;
//         let c=10;
//         // let a=10 let is used for local
//         var b=20;
//         // var b=20  var is used for globa;//
//         console.log(a)
//     }
//     // console.log(b)
//     // console.log(a)
// }
// let a=10;
// let b=20;
// c=a++ + ++b +--a - a-- + b++ + ++b - a++ + a

// console.log(c)
// loopings
// for(var i=0;i<5;i+=2){
//     console.log(i)
//     }
//     for(var i=0;i<5;i++){
    
//     }
//     console.log(i)
// functions and parameters :
// divide 2 
// function definition
// function call 
// function print(){
//     console.log("working")
// }
// print()
// var a=10;
// function print(){
//  return ++a;
//  console.log("work")

// }
// console.log(print()) if return after whatever to print using console not work that console
function print(a,b){
    ++a;
    return a+b;
}
 console.log(print(2,5))

