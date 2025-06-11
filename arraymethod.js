let fruits = ["apple","mango","orange"]
// index           0      1       2
console.log(fruits)
//.push
fruits.push("banana")
console.log(fruits)
fruits.push("kiwi")
console.log(fruits)

//unshifts adds at first
// push adds at last

fruits.push("banana")
fruits.push("watermelon")
console.log(fruits)

//.map() and foreach()

let numbers =["10","20","30","40"];
numbers.forEach((value) => {
    console.log(value)
})
// forEach is used to print all the elements
// in an array
// forEach does not return value

let num1 =[5,12,8];
// .find() ==> Returns the first match based on condition.

num1.find((value) => { 
     console.log(value > 5)

})


// .includes()


let arr = [1,2,3,4,5]
let check = arr.includes(3) // true 
console.log(check)

let arr1 = [3,6,9,1,2]
// to sort the array 
//console.log(arr1.sort())
console.log(arr1.reverse())

let num2 = [1,20,11,21,80,23,1053]
console.log(num2.sort((a,b) => b - a))