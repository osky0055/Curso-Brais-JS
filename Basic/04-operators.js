let a = 5
let b = 10


console.log(a + b) // Addition
console.log(a - b) // Subtraction
console.log(a * b) // Multiplication
console.log(a / b) // Division
console.log(a % b) // Modulus
console.log(a ** b) // Exponentiation

console.log("Addition:", a + b)
console.log("Subtraction:", a - b)
console.log("Multiplication:", a * b)
console.log("Division:", a / b)
console.log("Modulus:", a % b)
console.log("Exponentiation:", a ** b)

// operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 
console.log("+=2:", myVariable)
myVariable -= 5 
console.log("-=5:", myVariable)
myVariable /= 5 
console.log("/=5:", myVariable)
myVariable %= 5 
console.log("%=2:", myVariable)
myVariable -= 5 
console.log("-=5:", myVariable)
myVariable **= 5 
console.log("**=2:",myVariable)

// operadores de comparación
let x = 10
let y = "10"

console.log(x ,y)
console.log("5 == 5:", 5 == "5")  // Compara solo valor no importa que sea de otro tipo
console.log("5 != 5:", 5 != "5")
console.log("x < y:", x < y)
console.log("x > y:", x > y)
console.log("x <= y:", x <= y)
console.log("x >= y:", x >= y)

console.log("6 === `6`:", x === y)   // Compara valor y tipo
console.log("7 !== `8`:", 7 !== 8)     // Compara valor y tipo
console.log("x == y:", x == y)    // compara solo valor
console.log("x != y:", x != y)    // compara solo valor

// operadores lógicos
// and (&&), or (||), not (!)

console.log( 5 > 3 && 2 < 4) // true
console.log( 5 > 3 || 2 > 4) // true
console.log( !(5 > 3) ) // false        

// operadores de incremento y decremento
let z = 5
console.log("z:", z)
console.log("z++:", z++) // post-incremento
console.log("++z:", ++z) // pre-incremento
console.log("z--:", z--) // post-decremento
console.log("--z:", --z) // pre-decremento

// operadores de cadena
let str1 = "Hola"
let str2 = "Mundo"
console.log(str1 + " " + str2) // concatenación
console.log(str1.concat(" ", str2)) // concatenación usando concat()

// operadores de tipo
console.log(typeof str1) // string
console.log(typeof z) // number

// operadores ternarios
let edad3 = 18
let mensaje = (edad3 >= 18) ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mensaje)

