const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
    const tarefaInput = document.getElementById("add").value;
    if (tarefaInput.trim() !== "") {
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
       
        tarefas.push({ texto: tarefaInput, concluida: false });
       
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
       
        atualizarListas();
       
        document.getElementById("add").value = "";
    }
});

function atualizarListas() {
    const listaPendentes = document.getElementById("tarefas");
    const listaConcluidas = document.getElementById("tarefasConcluidas");
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
   
    listaPendentes.innerHTML = "";
    listaConcluidas.innerHTML = "";
   
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.className = "tarefa";
        li.innerHTML = `
            <label for="tarefa-${index}">${tarefa.texto}</label>
            <input type="checkbox" id="tarefa-${index}" ${tarefa.concluida ? "checked" : ""} />
        `;
       

        li.querySelector("input").addEventListener("change", (e) => {
            tarefas[index].concluida = e.target.checked;
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
            atualizarListas();
        });
       
        if (tarefa.concluida) {
            listaConcluidas.appendChild(li);
        } else {
            listaPendentes.appendChild(li);
        }
    });
}

document.addEventListener("DOMContentLoaded", atualizarListas);
