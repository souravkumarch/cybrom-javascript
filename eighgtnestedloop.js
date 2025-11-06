// for(let a=2;a<=3;a++){
//     for(let b=1;b<=10;b++){
//         console.log(a*b);
//     }
// }

// Q1.******

// Q2.******
//    ******
//    ******
//    ******

// for(let i=1;i<=1;i++){
// for(let i=1;i<=6;i++){
//     document.write("*");
// }
// }

// for(let i=1;i<=4;i++){
// for(let i=1;i<=6;i++){
//     document.write("* ");
// }
// document.write("<br>");
// }

// for(let i=1;i<=5;i++){
// for(let j=1;j<=i;j++){
//     document.write("*");
// }
// document.write("<br>");
// }

// for(let i=5;i>=1;i--){
// for(let j=1;j<=i;j++){
//     document.write("*");
// }
// document.write("<br>");
// }
// Q5.
// *****
// *   *
// *   *
// *   *
// *****
for(let i=1;i<=5;i++){
for(let j=1;j<=5;j++){
    if(i===1 || j===1 || i===5 || j===5 ){ 
    document.write("* &nbsp");
    }
    else{
       document.write("&nbsp&nbsp&nbsp&nbsp"); 
    }
}
document.write("<br>");
}

