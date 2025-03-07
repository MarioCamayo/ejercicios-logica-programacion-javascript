/* Ejercicio 5: En un array, introducir todos los nombres de 10 estudiantes, luego permitir introducir un nombre. El programa te dirá si ese nombre está en el array.

*/

function buscarEstudiante() {
    let estudiantes = ["Juan", "Ana", "Pedro", "Luis", "Maria", "Carlos", "Sofia", "Elena", "Hugo", "Diana"];
    let nombre = prompt("Introduce un nombre para buscar:");

    if (estudiantes.includes(nombre)) {
        alert(`El nombre ${nombre} está en la lista.`);
    } else {
        alert(`El nombre ${nombre} NO está en la lista.`);
    }
}

buscarEstudiante();

