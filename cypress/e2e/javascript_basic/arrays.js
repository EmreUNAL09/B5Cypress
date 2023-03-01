//Creating array
var scores= new Array();//empty 
var numbers=new Array(10); // array with initial size 10
var myNumber=new Array(9,10,4,2)// array with initial elements

var athletes=Array(3)//array with initial size 3
var sings=Array('Red') // array with one element

var emptyArray=[];//empty 
var colors=['red','green','blue']

//array examples
let tools=["jest","selenium","cypress","testcafe","phantomjs","protractor"]

//Accesing array elements

console.log(tools)
console.log(tools.toString())
console.log(tools[2])

const string=tools.toString()
console.log(string)

//add * between element
const join=tools.join(" * ")
console.log(join)

//removes an element from the end oy an array
const pop=tools.pop()
console.log(tools)
console.log(pop)

//add element to end of array
const push=tools.push("slimerJS")
console.log(tools)
console.log(push)

//removes an element from the beginning of an arrays
const shift=tools.shift()
console.log(tools)
console.log(shift)

//add element to beginning of array
const unshift=tools.unshift("selenoid")
console.log(tools)
console.log(unshift)

//sort element
const sort=tools.sort()
console.log(tools)
console.log(sort)

//reverse element
const reverse=tools.reverse()
console.log(tools)
console.log(reverse)

tools.forEach((value)=>{ //foreach loop
    if(value=="cypress"){ //controlflow selection
        console.log("cypress is trending now")
    }else{
        console.log("element NOT found")
    }
})