//Programa una función que reciba un string y que te devuelva un array con las diferentes separaciones según el caracter de separación que le des.

// 'Bienvenido a Inglaterra',' '

function separarCharacter(text, character) {
  return text.split(character)
}

const miString = 'Bienvenido a Inglaterra mario'
console.log(miString.split(' ').includes('Desarrollador')) // false