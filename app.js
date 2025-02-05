// Marisol El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {

    let nombre = document.getElementById("amigo").value

    // console.log(nombre)

    // Aqui va el Codigo.

    if (nombre == "")
        alert("Por favor, inserte un nombre.")
    else

        amigos.push(nombre)

    //Limpiar el Campo Nombre
    document.getElementById("amigo").value = "";

    console.log(amigos);

    listaramigos();
}

function listaramigos() {

    // Seleccionar la lista HTML
    let ListaDeAmigos = document.getElementById('listaAmigos');

    ListaDeAmigos.innerHTML = '';


    amigos.forEach(function (amigo) {

        let nuevoElemento = document.createElement('li');

        nuevoElemento.textContent = amigo;

        ListaDeAmigos.appendChild(nuevoElemento);

        console.log(amigo);

    });

}

function sortearAmigo() {

    if (amigos.length > 0) {
        // Si hay amigos, procedemos a sortear uno al azar
        let  indiceAleatorio = Math.floor(Math.random() * amigos.length);

        
        console.log(indiceAleatorio);

        console.log(` El inidce Aleatorio es: ${indiceAleatorio}`);

        let  amigoSorteado = amigos[indiceAleatorio];

        console.log(`¡El amigo sorteado es: ${amigoSorteado}!`);

       let  resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;

      } 
      
      else {
        console.log("No hay amigos disponibles para sortear.");
      }

}


