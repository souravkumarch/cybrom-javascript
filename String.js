let name ="Sourav"
console.log(name[0])
console.log(name.toUpperCase());

let nam2 = " you are so bad";
console.log(nam2.trimStart());
console.log(nam2.trimEnd())

let nam3 = "  hi how are you   "
console.log(nam3.trim())
console.log(nam3)

let nam4 = "welcome to the world .. . ... !!!!!!"
console.log(nam4.repeat(4))
//it is used to repeat the string
console.log(nam4.replace("world","Deoghar"))
//it is used to replace the same word from whole sentence like all "best" replaced to "worst"
let nam5 = "i am the best guy in this class but he is also best "
console.log(nam5.replaceAll("best","worst"))

//template literals 
let st2 ="hellow "
let st3 ="Sourav"
console.log(st2+ " "+ st3)
//iske help se ham bina \n ke bhi line change kar sakte hai matlab jaisaString likha rahega waisa hi print ho jayega
let st4 =`js class
with Qasim sir`
console.log(st4)
let st5 = `${st4 } in cybrom`
console.log(st5)