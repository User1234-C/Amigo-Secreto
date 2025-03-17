// 1. Obtener referencias a los elementos del DOM
const amigoInput = document.getElementById('amigo'); // Campo de texto
const listaAmigos = document.getElementById('listaAmigos'); // Lista de amigos
const resultado = document.getElementById('resultado'); // Elemento para mostrar el resultado

// 2. Crear un array para almacenar los nombres
let amigos = [];

// 3. Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = amigoInput.value.trim(); // Capturar el valor del campo de entrada y eliminar espacios en blanco

    if (nombre) { // Validar que el campo no esté vacío
        amigos.push(nombre); // Añadir el nombre al array de amigos
        actualizarLista(); // Actualizar la lista en la página
        amigoInput.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, inserte un nombre.'); // Mostrar alerta si el campo está vacío
    }
}

// 4. Función para actualizar la lista de amigos en la página
function actualizarLista() {
    listaAmigos.innerHTML = ''; // Limpiar la lista existente

    amigos.forEach((nombre) => { // Iterar sobre el array de amigos
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = nombre; // Asignar el nombre al <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// 5. Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length > 0) { // Validar que haya amigos disponibles
        const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
        const amigoSecreto = amigos[indiceAleatorio]; // Obtener el nombre correspondiente al índice
        resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`; // Mostrar el resultado
    } else {
        resultado.innerHTML = '<li>No hay amigos en la lista.</li>'; // Mostrar mensaje si no hay amigos
    }
}