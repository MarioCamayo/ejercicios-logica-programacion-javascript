/* Ejercicio 8: Mostrar todos los números impares que hay entre dos números introducidos por el usuario.

*/

function mostrarImpares() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese valores numéricos válidos.");
        return;
    }

    console.log(`Números impares entre ${num1} y ${num2}:`);
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

mostrarImpares();



