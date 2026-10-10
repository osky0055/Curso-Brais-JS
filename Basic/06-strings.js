let myName = "Oscaracitoza"
let greeting = "Hola, me llamo " + myName + "! "
console.log(greeting)
console.log("Mi nombre tiene " + myName.length + " letras.")
console.log("Mi nombre en mayúsculas es: " + myName.toUpperCase())
console.log("Mi nombre en minúsculas es: " + myName.toLowerCase())
console.log("Mi nombre empieza con la letra " + myName[0] + " y termina con la letra " + myName[myName.length - 1] + ".")   
console.log("Mi nombre tiene la letra 'a': " + myName.includes("a"))    
console.log("Mi nombre tiene la letra 'z': " + myName.includes("z"))
console.log("Mi nombre tiene la letra 'a' en la posición: " + myName.indexOf("a"))
console.log("Mi nombre tiene la letra 'z' en la posición: " + myName.indexOf("z"))
console.log("Mi nombre tiene la letra 'a' en la última posición: " + myName.lastIndexOf("a"))
console.log("Mi nombre tiene la letra 'a' en la última posición: " + myName.lastIndexOf("a",2))
console.log("Mi nombre tiene la letra 'z' en la última posición: " + myName.lastIndexOf("z"))
console.log("Mi nombre tiene la letra 'a' en la última posición: " + myName.lastIndexOf("a",2))
console.log("Mi nombre tiene la letra 'z' en la última posición: " + myName.lastIndexOf("z"))

