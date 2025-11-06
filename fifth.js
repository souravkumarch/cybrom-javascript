//Q1.wap to take integer input from user an check the number is even or odd if the number is even then check the number lies between 1 to 20 if it lies then print its cube and its not lies in between then print Square if it is odd then print the number as it is
// let x=parseInt(prompt("enter the number "));

// if(x%2==0){
// if (x>=1 && x<=20){
// console.log("Square : " ,x*x);
// }
// else{
//     console.log("cube : ",x*x*x)
// }

// }
// else{
//     console.log("number : " ,x)
// }
//Q2 take integer input from the user and chech the +ve or -ve if +ve then number is divisible by 3 print number is not didvisible by 3  if -ve then print Square

// let y=parseInt(prompt("enter the number "));
// if(y>0){
//     if(y%3==0){
//     console.log("number is divisible by 3")
//     }
//     else{
//         console.log("number is not divisible by 3")
//     }
// }
// else{
//     console.log("Square" ,y*y)
// }

// let x=parseInt(prompt("enter the number "));

// switch(x){

//     case 1:
//     console.log(111);
//      break;
//     case 2:
//     console.log(22);
//     break;

// case 3:
//     console.log(333);
//     break;

//     default:

//     console.log("Invalid Input")
// }

//Q3 wap to take input from yhe user and chech character is vowel or not

let x=prompt("enter the number ");

switch(x){

    case 'a' :
      case 'A':
        console.log("vowel" , x)
      break;
      case 'e' :
         case 'E':
        console.log("vowel" , x)
        break;
          case 'i' :
             case 'I':
        console.log("vowel" , x)
        break;
          case 'o':
             case 'O':
        console.log("vowel" , x)
        break;

          case 'u':
            case 'U':
        console.log("vowel" , x)
        break;

        default:
            console.log("consonant: ",x)
}