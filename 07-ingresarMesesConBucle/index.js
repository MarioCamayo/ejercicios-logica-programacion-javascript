/* Ejercicio 7: Con un bucle, ingresar todos los meses del año dentro de un array, luego pintar los datos introducidos en la consola."

*/
3) 




function ingresarMeses() {
    let meses = [];

    for (let i = 0; i < 12; i++) {
        let mes = prompt(`Ingresa el mes número ${i + 1}:`);
        meses.push(mes);
    }

    console.log("Meses ingresados:", meses);
}

ingresarMeses();



