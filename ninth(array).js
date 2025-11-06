// let arr =["abc",29,"bpl",5.9,"India"];
// for(let vl =0;vl<5;vl++){
// console.log(arr[vl]);
// }

// let person = [];
// for(let i=0;i<5;i++){
//     person[i] = parseInt(prompt("enter the value at index" + i));
// console.log(person[i]);
// }

// let person =[1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for(let i=0;i<person.length;i++){
// sum +=person[i]
// }
// console.log(sum);
//qwap to take 10 inputs from the user and print the square of all even numbers

// let arr = [];
// for(let i=0;i<10;i++){
//     arr[i] = parseInt(prompt("enter the number at index : ",i));
//     if(arr[i]%2===0){
//         console.log("square : ",arr[i]*arr[i]);
//     }
// }

//qwap to take 10 inputs from the user and print the square of all even numbers


let arr = [];
let sum = 0;
for(let i=0;i<10;i++){
    arr[i] = parseInt(prompt("enter the number at index : ",i));
    if(arr[i]%2===1){
        sum +=arr[i];
        
    }
}
console.log("sum :",sum);