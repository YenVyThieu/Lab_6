//task 1
let myNumber = 10

let myString = "Hello, Javascript!"

console.log(myNumber)
console.log(myString)
//task 2
console.log("2a")
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log("2b")
for (let a = 1; a <= 5; a++) {
    console.log(a * 3)
}
//task 3
function addNumber(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log("The result is: " + addNumber(10, 50))

function multiplyNumber(num1, num2) {
    let result = num1 * num2;
    return result;
}
console.log("The result is: " + multiplyNumber(6, 5))