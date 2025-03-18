// Selección de elementos del DOM
const inputNombre = document.getElementById('amigo');
const listaNombres = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Arreglo para almacenar los nombres
let nombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = '';
}

// Activar la función al presionar Enter
inputNombre.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
    listaNombres.innerHTML = '';
    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
}
