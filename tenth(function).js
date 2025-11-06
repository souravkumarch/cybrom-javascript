let person =['Sourav ' , 21 , 'Bihar']
console.log(person);

//push() => used to add multiple element at lat index

person.push('TIT' , 'Bhopal');
console.log(person);


//pop() used to remove oneelement from the last index
person.pop();
console.log(person);

//unshift() => used to add multiple element from first
person.unshift('mr' ,'male')
console.log(person);


//shift() => used to remove element from first
person.shift();
console.log(person);


//slice(start index , end index) => it used to make sub array of array 

let arr =["Qasim",28, "Bhopal" ,"india"]
console.log(arr);
let vl = arr.slice(1,3)
console.log(vl)

//splice (index , no of element) => it is used to delete element in array
let ar1 =["Qasim",28, "Bhopal" ,"india"]
console.log(ar1);
ar1.splice(1,1)
console.log(ar1)
//splice (index , no of element , add value) => it is used to add element in array ye Pehle us index ke element ko delete bhi karta hai

ar1.splice(1,0,'khan')
console.log(ar1)

// ...(spread function bolte isko)
//Syntsx : ... Name of array

let arr1 =[1,2,3,4,5]
let arr2 =[6,7,8,9,10]
let arr3 = [...arr1 , ...arr2]
console.log(arr3)