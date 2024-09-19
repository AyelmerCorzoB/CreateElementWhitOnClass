//Creo mi elemento
class etiquetaElement extends HTMLElement{
    constructor() {
        super();
        this.id = "caja";
        this.className ="caja"
        let caja = document.getElementById("caja");
        let titulo = document.createElement("h1")
        titulo.textContent = "Ayelmer Corzo"
        titulo.className = "h1titulo"

        let contenidoDeCaja = document.createElement("div");
        contenidoDeCaja.className = "contenidoDeCaja"
        
        //Contenido de la izquierda INFO HOBBIES
        let Izquierda = document.createElement("div")
        Izquierda.className = "contenidoIzquierda"
        let hobbiesPersonales = document.createElement("p")
        hobbiesPersonales.innerHTML = `
        <ul>
            <li>Jugar videojuegos </li>
            <li>Mirar Series </li>
            <li>Pasar tiempo con mi pareja </li>
            <li>Comer (COMIDA) </li>
        </ul>
        `
        Izquierda.append(hobbiesPersonales)

        //Contenido de la Derecha INFO HOBBIES PROFESIONALES
        let Derecha = document.createElement("div")
        Derecha.className = "contenidoDerecha"
        let hobbiesProfesionales = document.createElement("p")
        hobbiesProfesionales.innerHTML = `
        <ul>
            <li>Leer Documentacion</li>
            <li>Practicar a diario </li>
            <li>Mirar tutoriales</li>
            <li>Estudiar cursos en Udemy </li>
        </ul>
        `
        Derecha.append(hobbiesProfesionales)

        contenidoDeCaja.append(Izquierda)
        contenidoDeCaja.append(Derecha)
        
        caja.append(titulo)
        caja.append(contenidoDeCaja)
        
    }

    // SE EJECUTA CUANDO CREA EL ELEMENTO
    connectedCallback(){
        
    };

    // SE EJECUTA CUANDO SE ELIMINA EL ELEMENTO
    disconnectedCallback() {
        console.log("Se ha completado el tiempo de espera,eliminamos la etiqueta");
    };
};
//Registro mi elemento en la lista de elementos disponibles en HTML
customElements.define("etiqueta-element", etiquetaElement);

