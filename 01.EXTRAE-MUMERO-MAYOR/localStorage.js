function crearElementos() {
  const titulo = document.createElement("h1");
  titulo.textContent = "¡Hola desde JavaScript!";
  titulo.id = "miTitulo";
  document.body.appendChild(titulo);

  const img = document.createElement("img");
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2hdQeNVlyu20ReOpJcNwdgW0ER5hwxnauQ&s";
  img.alt = "Imagen de ejemplo";
  img.id = "miImagen";
  document.body.appendChild(img);

  const boton = document.createElement("button");
  boton.textContent = "Eliminar Imagen";
  boton.id = "btnEliminar";
  document.body.appendChild(boton);

  boton.addEventListener("click", function () {
       document.body.innerHTML = ""; // Borra todo el contenido de la página

      //document.getElementById("miImagen")?.remove();
      localStorage.removeItem("elementosCreados");
  });

  localStorage.setItem("elementosCreados", "true");
}

if (localStorage.getItem("elementosCreados")) {
  crearElementos();
}

crearElementos();