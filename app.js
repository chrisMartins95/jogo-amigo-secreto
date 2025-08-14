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

function sortearParticipante(){

    if (participantes.length < 2){
        alert("É necessário pelo menos 2 participantes para realizar o sorteio.");
        return;
    }else{
        //let participantesSorteados = [...participantes];
        let indiceSorteado = Math.floor(Math.random() * participantes.length);
        let participantesSorteados = participantes[indiceSorteado];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ""; // Limpa o resultado anterior
        resultado.innerHTML = participantesSorteados
        console.log(participantesSorteados);
    }
}
