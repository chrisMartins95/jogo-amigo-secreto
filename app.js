//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Jogo Amigo secreto.

let participantes = [];


function adicionarParticipante() {
    let input = document.getElementById("participante");
    let nomeParticipante = input.value;  
    
    if (nomeParticipante !== ""){
        participantes.push((nomeParticipante));
        input.value = "";
        console.log(participantes);
        atualizarLista(nomeParticipante);
    }else{
        alert("Por favor, insira um nome válido.");
    }
}

function atualizarLista(nomeParticipante) {
    list = document.getElementById("listaAmigos");
    list.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < participantes.length; i++) {
        let li = document.createElement("li");
        li.textContent = participantes[i];
        list.appendChild(li);
    }
    
}


