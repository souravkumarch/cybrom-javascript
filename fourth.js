// let a = parseInt(prompt("enter the value"));

// if (a>0){
// alert("+ve marks ,a")
// }

// else{
// alert("-ve marks",a)
// }

//Q1 wap to check marks is greater than 15 or not
// let b= parseInt(prompt("enter the marks"));
// if (b>15){
// alert("it is greater");
// }
// else{
// alert("not greater");
// }

// wap to check no is divisible by 3 or not

// let num1= parseInt(prompt("enter the marks"));
// if (num1%3==0){
// alert("divisible");
// }
// else{
// alert("not divisible");
// }

//wap to check num is even or odd

// let num2= parseInt(prompt("enter the marks"));
// if (num2%2==0){
// alert("even");
// }
// else{
// alert("odd");
// }

//wap to check num is -ve or +ve , if marks is -ve then print the square of that marks and the marks is +ve  the print the nymber only

// let num3= parseInt(prompt("enter the marks"));
// if (num3<0){
// console.log("Square",num3*num3)
// }
// else{
// console.log("numumber is",num3);
// }


//wap to take two input from the user if the second  marks is even the print the cube of first marks and if the marks is odd print the araea of the circle

// let num4= parseInt(prompt("enter the marks"));
// let num5= parseInt(prompt("enter the marks"));
// if (num5%2==0){
// console.log("Square",num4*num4*num4)
// }
// else{
// console.log("Area ",3.14*num4*num4);
// }

//==============================================================================================================

// Syntax : 
// if(condition)
// {

// //code
// }

// else if (condition){
// //code
// }

// else if (condition){
// //code
// }

// else{
// //code
// }
// let y = parseInt(prompt("enter the marks here"));
// if(y>0)
// {
// console.log("+ve num");
// //code
// }

// else if(y<0){
//     console.log("negative marks")
// //code
// }



// else{
// console.log("neutral")
// }

//================================================================================================================================================
//Q wap to take input of five subject marks and check the grade of of average of 5 subject ;

let english = parseInt(prompt("enter the marks here"));
let hindi = parseInt(prompt("enter the marks here"));
let math = parseInt(prompt("enter the marks here"));
let science = parseInt(prompt("enter the marks here"));
let chemistry = parseInt(prompt("enter the marks here"));

let avg = (english+hindi+math+science+chemistry)/5;


if(avg<90 && avg>=80){
    console.log("A+");
}
else if(avg<80 && avg>=70){
    console.log("A");
}
else if(avg<70 && avg>=60){
    console.log("B")
}
else if(avg<60 && avg>=50){
    console.log("C")
}
else if(avg<50 && avg>=40){
    console.log("D")
}
else if(avg<40){
    console.log("FAIL")
}