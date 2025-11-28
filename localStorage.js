localStorage.setItem("name","Sourav")
localStorage.setItem("city","deoghar")
 let userName = localStorage.getItem("city")
 document.write(userName)
 localStorage.removeItem("city")

 //storing object in localStorage 
let person = {
name:"SOURAV",Age:22 , city:"Deoghar" , clg:"OIST"
}
//yaha par object ko string me convert karna padta hai

localStorage.setItem("userdata",JSON.stringify(person))

let newobj = JSON.parse(localStorage.getItem("userdata"))

document.write(newobj.name)