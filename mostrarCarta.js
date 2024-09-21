import "./cartaPresentacion.js"; // Importa la clase correctamente

function visualizarTarjeta() {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const botonMostrar = document.getElementById("mostrarCarta");
    
    botonMostrar.addEventListener("click", () => {
        const etiqueta = document.createElement("div"); // Usa el nombre del elemento
        etiqueta.innerHTML = `<etiqueta-element></etiqueta-element>`
        contenedorPrincipal.append(etiqueta);
        botonMostrar.remove()
    });
}

export default visualizarTarjeta;

