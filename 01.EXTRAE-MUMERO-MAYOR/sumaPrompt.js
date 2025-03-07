// const firstNumber = parseInt( prompt('Enter the first number'));
// const  secondNumber = parseInt(prompt('Enter the second number'));
// alert(`The sum of the two numbers is ${firstNumber + secondNumber}`);

// if(firstNumber === '' || secondNumber === ''){
//     alert('Please enter a number');
    
// }

// else if(firstNumber > secondNumber){
//     alert(`The first number ${firstNumber} is greater than the second number ${secondNumber}`); 
// }
// else if(firstNumber < secondNumber){
//     alert(`The first number ${firstNumber} is less than the second number ${secondNumber}`);
// }
// else{
//     alert(`The first number ${firstNumber} is equal to the second number ${secondNumber}`);
// }


function sumarNumeros() {
  let num1 = prompt("Ingresa el primer número:");
  let num2 = prompt("Ingresa el segundo número:");

  // Validar que los valores no estén vacíos y sean números
  if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
      alert("Error: Debes ingresar solo números válidos.");
  } else {
      let suma = parseFloat(num1) + parseFloat(num2);
      alert("La suma de los números es: " + suma);
  }
}

// Llamar a la función
sumarNumeros();

