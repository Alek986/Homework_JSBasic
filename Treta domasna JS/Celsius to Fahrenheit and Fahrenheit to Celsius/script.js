function celsiusToFahrenheit(celsius){
    let valueOfFahrenheit = celsius * 1.8 +32
    return valueOfFahrenheit
}

function fahrenheitToCelsius(fahrenheit){
    let valueOfCelsius = (5/9) * (fahrenheit - 32)
    return valueOfCelsius
}

let celsius = parseInt(prompt("Enter value of celsius"))
let fahrenheit = parseInt(prompt("Enter value of fahrenheit"))

let result = celsiusToFahrenheit(celsius)
let res = fahrenheitToCelsius(fahrenheit)

console.log(`It is ${result} celsius`)
console.log(`It is ${res} fahrenheit`)