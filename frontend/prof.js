const modal = document.getElementById("modal");
const abrir1 = document.getElementById("nova-atividade");
const abrir2 = document.getElementById("nova-atividade-2");
const fechar = document.getElementById("fechar");
const form = document.getElementById("form");

abrir1.addEventListener("click", () => {
    modal.classList.add("ativo");
});


abrir2.addEventListener("click", () => {
    modal.classList.add("ativo");
});

fechar.addEventListener("click", () => {
    modal.classList.remove("ativo");
});

document.querySelector(".modal-fundo").addEventListener("click", () => {
    modal.classList.remove("ativo");
});

form.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const turma = document.getElementById("turma").value;
    const data = document.getElementById("data").value;

    alert(
        "Atividade criada!\n\n" +
        "Título: " + titulo + "\n" +
        "Turma: " + turma + "\n" +
        "Entrega: " + data
    );

    form.reset();

    modal.classList.remove("ativo");

});

document.getElementById("sair").addEventListener("click", () => {

    window.location.href = "index.html";

});

/////////////////////////-----/////////////////////////////////////////////

let atividadesCriadas = 0;

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const turma = document.getElementById("turma").value;
    const data = document.getElementById("data").value;

    atividadesCriadas++;

    alert(
        "Atividade criada!\n\n" +
        "Título: " + titulo + "\n" +
        "Turma: " + turma + "\n" +
        "Entrega: " + data
    );

    console.log("Total de atividades criadas:", atividadesCriadas);

    form.reset();
    modal.classList.remove("ativo");
});

///////////////////////////////////////////////////////////////

const listaAtividades = document.getElementById("lista-atividades");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const turma = document.getElementById("turma").value;
    const data = document.getElementById("data").value;

    const atividade = document.createElement("div");

    atividade.classList.add("atividade");

    atividade.innerHTML = `
        <h3>${titulo}</h3>
        <p>Turma: ${turma}</p>
        <p>Entrega: ${data}</p>
        <button class="concluir">Marcar como concluída</button>
        <button class="excluir">Excluir</button>
    `;

    listaAtividades.appendChild(atividade);

    atividade.querySelector(".concluir").addEventListener("click", () => {
        atividade.classList.toggle("concluida");
    });

    atividade.querySelector(".excluir").addEventListener("click", () => {
        atividade.remove();
    });

    form.reset();
    modal.classList.remove("ativo");
});