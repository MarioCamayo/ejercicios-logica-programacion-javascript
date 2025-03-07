// const conjuntoNumeros = [10,30,2,5,45,8,100]

// conjuntoNumeros.forEach(element => {
//    element ? 
  
// });

//Programa una función que reciba un String  y que te devuelva la cantidad de carácteres que tiene ese String.

function caracteres(text, number) {

  return text.slice(0,number)
  
}

console.log(caracteres('Bienvenido a Europa' , 10)) 

const caracteres2 = (text, number) => text.slice(0,number)
console.log(caracteres2('Bienvenido a Europa' , 10))

// const text = 'Bienvenido a Europa'
// console.log(text.slice(0,5))