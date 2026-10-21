console.log("Hola a todos");

const text = "Hola a todos";

text.replaceAll(/[aeiou]/g, "i");
// ------------------------------
// Eventos de los botones warning
const alerta = document.querySelector(".warning");

alerta.addEventListener("click", () => alert("Me has pulsado"));

class EventLogger {
  constructor(container) {
    this.container = container;
  }

  handleEvent(event) {
    const time = new Date(performance.timeOrigin + event.timeStamp).toLocaleTimeString();

    // 1. Creación en memoria (desconectado del DOM)
    const p = document.createElement("p");
    p.classList.add("event-entry");

    // 2. Conexión física al DOM mediante el método mutador
    this.container.append(p);

    // [Seguro] p.isConnected es true: el nodo ya forma parte activa del árbol DOM
    console.log("Elemento insertado (en el DOM):", p.isConnected); // true

    // 3. Incrustamos los datos junto con el valor real de su propiedad isConnected
    p.textContent = `${event.type}: ${time} | isConnected: ${p.isConnected}`;
  }
}

const box = document.querySelector(".event-box");
const btn = document.querySelector(".event-btn");

btn.addEventListener("click", new EventLogger(box));

// regisstro de eventos en relacion a capture
const container = document.querySelector("container-listener");
const status = document.querySelector(".status");

const update = (ev) => {
  console.log("Target: ", ev.target.className);
  console.log("currentTarget: ", ev.currentTarget.className);
};

container.addEventListener("click", (ev) => update(ev));
