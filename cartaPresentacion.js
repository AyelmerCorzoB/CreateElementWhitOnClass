export class EtiquetaElement extends HTMLElement {
  constructor() {
    super();

    const CartaDePresentacion = document.createElement("div");
    CartaDePresentacion.id = "CartaDePresentacion";

    const titulo = document.createElement("h1");
    titulo.textContent = "Ayelmer Corzo";

    const contenidoDeCartaDePresentacion = document.createElement("div");
    contenidoDeCartaDePresentacion.id = "contenidoDeCartaDePresentacion";

    // Contenido de la izquierda (Hobbies personales)
    const izquierda = document.createElement("div");
    izquierda.id = "contenidoIzquierda";
    izquierda.innerHTML = `
            <ul>
                <li>Jugar videojuegos</li>
                <li>Mirar series</li>
                <li>Pasar tiempo con mi pareja</li>
                <li>Comer (COMIDA)</li>
            </ul>
        `;

    // Contenido de la derecha (Hobbies profesionales)
    const derecha = document.createElement("div");
    derecha.id = "contenidoDerecha";
    derecha.innerHTML = `
            <ul>
                <li>Leer Documentacion</li>
                <li>Practicar a diario</li>
                <li>Mirar tutoriales</li>
                <li>Estudiar cursos en Udemy</li>
            </ul>
        `;

    contenidoDeCartaDePresentacion.append(izquierda, derecha);
    CartaDePresentacion.append(titulo, contenidoDeCartaDePresentacion);
    this.append(CartaDePresentacion);
  }

  connectedCallback() {
    const formularioElement = document.querySelector("formulario-element");
    

  }

  disconnectedCallback() {
    console.log("Se ha completado el tiempo de espera, eliminamos la etiqueta");
  }
}

customElements.define("etiqueta-element", EtiquetaElement);
