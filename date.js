let today = new Date()
console.log(today)

console.log(today.getFullYear())
console.log(today.getDate())
console.log(today.getMonth()+1)
console.log(today.toLocaleDateString())
console.log(today.toLocaleTimeString())

setInterval(()=>{
let time =new Date();
let curtime = time.toLocaleTimeString()
document.querySelector("#res").style.color="red"
document.querySelector("#res").innerHTML = curtime

},1000)

let abcd = function(val){
val()
}
abcd(function(){
    console.log("hello yaaar")
})


let aei = function (){
    return function(){
        console.log("i am sourav")
    }
}
aei()()

huii()()
function huii () {
    let a = 10;
   return ()=>{
     console.log(a)
   }
}

