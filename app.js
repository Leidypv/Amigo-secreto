// Crear un Array para almacenar los nombres
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const amigosSorteados = [];
const botonReiniciar = document.getElementById("reiniciar");


function agregarAmigo(){
    // Validar que el campo no este vacio
    if (inputAmigo.value == ""){
        alert("Por favor, ingrese un nombre.");
        return;
    }

    // Establecer el foco en el campo de entrada al cargar la página(cursor parpadeante)
   inputAmigo.focus();

    // Validar que el nombre no este duplicado
   if (listaAmigos.includes(inputAmigo.value)){
       alert(`El nombre ${inputAmigo.value}, ya fue agregado`);
       return;
   }
   
   // Actualizar el array de amigos 
    listaAmigos.push(inputAmigo.value);

    // Actualizar la lista de amigos (EL DOM)
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

    // Limpiar el campo de entrada
    inputAmigo.value = "";

}

function sortearAmigo(){
    // Validar que haya amigos disponibles
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, ingrese nombres."); 
        return;  
    }
    
    // Validar que haya al menos 3 amigos para sortear
    if (listaAmigos.length < 3) {
        alert("Se necesita un mínimo de 3 amigos para realizar el sorteo.");
        return;
    }
    
    // Validar si todos los amigos ya fueron sorteados
    if (amigosSorteados.length === listaAmigos.length){
        alert("Todos los amigos han sido sorteados. Para continuar, iniciar un Nuevo sorteo");
        botonReiniciar.removeAttribute('disabled');
        return;
    }

    // Generar índice aleatorio
    let random;
    let amigoSecreto;
    do { random = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[random];
    }
    // Repetir si el amigo ya fue sorteado
    while (amigosSorteados.includes(amigoSecreto));

    // Agregar el amigo sorteado a la lista de sorteados
    amigosSorteados.push(amigoSecreto);

    // Mostrar el resultado 
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`; 

    // Habilitar el botón de reinicio si todos los amigos han sido sorteados
    if (amigosSorteados.length === listaAmigos.length){
        botonReiniciar.removeAttribute('disabled');
    }

}

function reiniciarJuego() {
    // Limpiar el array de amigos y la lista en el DOM
    listaAmigos.length = 0;
    amigosSorteados.length = 0;
    ulListaAmigos.innerHTML = '';
    ulResultado.innerHTML = '';
    
    // Deshabilitar el botón de reinicio
    botonReiniciar.setAttribute('disabled', 'true');
    
    // Volver a establecer el foco en el campo de entrada
    inputAmigo.focus();
}

// Cuando se haga clic en el botón de Nuevo sorteo, se llamará a la función reiniciarJuego.
botonReiniciar.addEventListener('click', reiniciarJuego);
