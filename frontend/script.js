const modal = document.getElementById("modal");
const mensagem = document.getElementById("mensagem-modal");

function abrirModal() {
    if (!modal) return;
    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");
    if (mensagem) mensagem.textContent = "";
}

function fecharModal() {
    if (!modal) return;
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(
    "#botao-entrar, #botao-cadastrar, #botao-comecar, #botao-chamada"
).forEach((botao) => {
    botao.addEventListener("click", abrirModal);
});

document.querySelectorAll("[data-fechar]").forEach((elemento) => {
    elemento.addEventListener("click", fecharModal);
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        fecharModal();
    }
});

document.querySelectorAll(".perfil-opcao").forEach((botao) => {
    botao.addEventListener("click", () => {
        if (mensagem) {
            mensagem.textContent =
                `Cadastro de ${botao.dataset.perfil} selecionado. O backend será conectado nesta próxima etapa.`;
        }
    });
});


function testarIa() {
    alert(
        "🤖 Studium AI\n\n" +
        "O gerador de cronogramas está em desenvolvimento. " +
        "Em breve você poderá informar suas provas, tarefas e horários disponíveis " +
        "e receber um cronograma personalizado."
    );
}

