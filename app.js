// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicializamos la lista de amigos
let amigos = [];

//Funcion para agregar un amigo a la lista
function agregarAmigo() {
    
    //Reseteamos todo si la lista esta vacia
    if (amigos.length == 0) {
        document.getElementById("resultado").innerHTML = "";
    } 

    //Verificamos que el nombre sea válido
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Nombre inválido, por favor ingreselo nuevamente");
        return;
    }

    //Agregamos el amigo a la lista
    amigos.push(amigo);
    
    //Colocamos el valor del input en vacio
    document.getElementById("amigo").value = "";

    //Creamos un nuevo elemento de la lista y lo agregamos a la misma
    let listaAmigosHTML = document.getElementById("listaAmigos");
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.innerHTML = amigo;
    listaAmigosHTML.appendChild(nuevoAmigo);

}

//Funcion para elegir el amigo secreto
function sortearAmigo() {
    //Verificamos que al menos hallan dos amigos en la lista
    if (amigos.length < 2) {
        alert("Debe ingresar como mínimo dos participantes");
        return;
    }
    //Limpiamos la lista
    document.getElementById("listaAmigos").innerHTML = "";
    
    //Elegimos un amigo random
    let cantidadAmigos = amigos.length;
    let posicionAmigoSorteado = Math.floor(Math.random()*cantidadAmigos);
    let amigoSorteado = amigos[posicionAmigoSorteado];

    //Mostramos el amigo elegido
    let lista = document.getElementById("resultado");
    lista.innerHTML = `<li>El amigo sorteado es ${amigoSorteado}</li>`
    amigos = [];
}
