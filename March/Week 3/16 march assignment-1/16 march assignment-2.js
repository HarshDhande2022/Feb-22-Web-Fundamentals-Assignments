// Create a function which takes A and B parameters and return value of (a+b)^2.

function wholeSquare(a, b){
    let result = (a * a) + (b * b) + 2 * (a * b)
    return result
}
equation = wholeSquare(5,3)
console.log(equation)