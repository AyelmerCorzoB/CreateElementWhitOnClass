export class contenidoInicial extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.innerHTML = `
        <style>
        :host {
        display: block;
        }
        </style>
        <h1>Contenido Inicial</h1>
        <p>Este es el contenido inicial de la página.</p>
        `
        }
    
};
customElements.define('contenido-inicial', contenidoInicial);
