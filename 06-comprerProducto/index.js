/* Ejercicio 6: Preguntarle al usuario si quiere comprar el producto, si él te dice que sí, pinta un mensaje en la consola que diga "Gracias por tu compra"; de lo contrario, pinta una alerta que diga "Esperemos que compres la próxima."

*/

Ejercicio 7: Con un bucle, ingresar todos los meses del año dentro de un array, luego pintar los datos introducidos en la consola.


function confirmarCompra() {
    let respuesta = confirm("¿Quieres comprar este producto?");

    if (respuesta) {
        console.log("Gracias por tu compra.");
    } else {
        alert("Esperemos que compres la próxima vez.");
    }
}

confirmarCompra();


