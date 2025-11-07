// function Demo(){
//     console.log("inside the function")
// }
// Demo()

//===============================================
// Q1 wap to add two numbers using function
// function Add(){
//     let a= 10
//     let b= 11
//     let sum =a+b;
//     console.log("sum :",sum)
// }
// Add()

//================================================================
//Q2 wap to take one integer input from the user and check the number is odd or even
// function Oddeven(){
//     let x=parseInt(prompt("enter the number"));
//     if(x%2!==0){
//         console.log("number is odd",x);
//     }
//     else{
//         console.log("the number is even" ,x)
//     }
// }
// Oddeven()

//=========================================================================
//Q3 wap to print reverse table of any number using function

function Table(){
   let x=parseInt(prompt("enter the number"))
   for(let i=10;i>0;i--){
    document.write(x ,"*",i, "=",x*i)
   }
   document.write("<br>");
}
Table()
