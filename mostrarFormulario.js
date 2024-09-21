import "./formulario.js"; // Importa la clase correctamente

function visualizarFormulario() {
    const contenedorPrincipal = document.getElementById("contenedor-principal");
    const botonMostrarFormulario = document.getElementById("mostrarFormulario");
    
    botonMostrarFormulario.addEventListener("click", () => {
        const etiqueta = document.createElement("div"); // Usa el nombre del elemento
        etiqueta.innerHTML = `<formulario-element></formulario-element>`
        
        contenedorPrincipal.append(etiqueta);
        botonMostrarFormulario.remove()
    });
}

export default visualizarFormulario;
