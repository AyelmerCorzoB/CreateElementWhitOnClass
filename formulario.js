class Formulario extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const formulario = document.createElement("form");
        formulario.id = "inputFormulario";

        formulario.innerHTML = `
            <label for="nombre">Ingresa Tu Nombre:
                <input type="text" name="nombre" id="nombre" required>
            </label>
            <br>
            <label for="edad">Ingresa Tu Edad:
                <input type="number" name="edad" id="edad" required>
            </label>
            <br>
            <input type="submit" value="Enviar">
        `;

        const style = document.createElement("style");
        style.innerText = `
            form {
                margin-top: 2vh;
                background-color: green;
                padding: 20px;
                border-radius: 5px;
                color: white;
            }
            label {
                display: block;
                margin-bottom: 10px;
            }
        `;

        this.shadowRoot.append(style, formulario);

        formulario.addEventListener("submit", (event) => {
            event.preventDefault(); 
            const datos = new FormData(formulario);
            const nombre = datos.get("nombre");
            const edad = datos.get("edad");

            // Guardar los datos en localStorage
            localStorage.setItem("nombre", nombre);
            localStorage.setItem("edad", edad);

           
        });
    }
}

customElements.define("formulario-element", Formulario);
