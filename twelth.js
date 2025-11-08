//Q1 . wap to add two numbers using function type 1
function Add(){
    let a = 10;
    let b= 30;
    let sum =a+b;
    console.log(sum);
}
Add();

//Q2 . wap to check number is even and odd using function type 2

function EvenOdd(a){
   if(a%2==0){
console.log("Even")
   }
else{
    console.log("odd")
}
}
EvenOdd(10);

//====================================================================
//Q3 . wap to take 1 input from the user and chechk it is even or odd if the number is even then print the sum of all  numbers 1-10 and the number is odd then print the cube of that number using function type 3; 
// function A(a){
//     let sum = 0
// if(a%2==0){
//     for(let i =1;i<=10;i++){
// sum +=i;
//     }
//     return sum;
// }
//    else {
// let s =a*a*a;
//   return s
//    }
  
// }

// let a =parseInt(prompt("enter the  number"))
// console.log(A(a))

//==============================================================
// Q4 . wap to  create an array inside the function 25 -1 and print sum of all element which present in array using function type 4
function Arr(){
    let arr = [25,24,23,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
       

    }
     return sum;
}
console.log(Arr());