/* Ejercicio 4: Juan quiere comprarse un auto rojo; y le pregunta al vendedor de qué color son los autos y cuánto cuestan. Si el vendedor tiene autos y cuestan menos de 18000 dólares, Juan lo compra; de lo contrario, Juan no lo compra.
*/

function comprarAuto() {
  let color = prompt("¿De qué color quieres el auto?");
  let precio = parseFloat(prompt("¿Cuánto cuesta el auto?"));

  if (isNaN(precio) || precio <= 0) {
      alert("Ingrese un precio válido.");
      return;
  }

  if (precio < 18000) {
      alert(`¡Compra realizada! Disfruta tu auto ${color}.`);
  } else {
      alert("El auto es demasiado caro, no se comprará.");
  }
}

comprarAuto();
