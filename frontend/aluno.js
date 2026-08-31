const botoesConcluir = document.querySelectorAll(".concluir");
const entrarTurma = document.getElementById("entrarTurma");
const estudar = document.getElementById("estudar");
const sair = document.getElementById("sair");
const numeros = document.querySelectorAll(".card strong");

let pendentes = 4;
let concluidas = 12;

botoesConcluir.forEach((botao) => {
  botao.addEventListener("click", () => {
    botao.textContent = "Concluída";
    botao.disabled = true;

    pendentes--;
    concluidas++;

    numeros[0].textContent = pendentes;
    numeros[2].textContent = concluidas;
  });
});

entrarTurma.addEventListener("click", () => {
  const codigo = prompt("Digite o código da turma:");

  if (codigo) {
    alert("Turma adicionada: " + codigo);
  }
});

estudar.addEventListener("click", () => {
  alert("Continuando onde você parou...");
});

sair.addEventListener("click", () => {
  localStorage.removeItem("usuario");

  window.location.href = "login.html";
});
