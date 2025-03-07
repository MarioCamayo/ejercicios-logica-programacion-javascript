/**
 *Ejercicio 3: Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y al mostrar los resultados.
 */



function calcularSumaYMedia() {
  let suma = 0, contador = 0;

  while (true) {
      let num = prompt("Introduce un número (negativo para salir):");
      let numero = parseFloat(num);

      if (isNaN(numero)) {
          alert("Por favor, ingresa solo números.");
          continue;
      }

      if (numero < 0) break;

      suma += numero;
      contador++;
  }

  if (contador > 0) {
      let media = suma / contador;
      alert(`Suma total: ${suma}\nMedia: ${media}`);
  } else {
      alert("No ingresaste números válidos.");
  }
}

calcularSumaYMedia();
