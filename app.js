// Crear un Array para almacenar los nombres
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

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
    
    // Generar índice aleatorio
    const random = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado
    const amigoSecreto = listaAmigos[random];

    // Mostrar el resultado 
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`; 

}