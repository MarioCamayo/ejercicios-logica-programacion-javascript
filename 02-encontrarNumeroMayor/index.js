/*Ejercicio 1: Crear un programa que pida dos números y que diga cuál es mayor y cuál es menor o si son iguales.
*/


function compararNumeros() {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
  }

  if (num1 > num2) {
      alert(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
      alert(`${num2} es mayor que ${num1}`);
  } else {
      alert("Ambos números son iguales.");
  }
}

compararNumeros();
