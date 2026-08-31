const login = document.getElementById("area-login");
const cadastro = document.getElementById("area-cadastro");
const msg = document.getElementById("mensagem-cadastro");

const API = "http://localhost:3000";
let tipo = "aluno";

function mostrarCadastro() {
  login.style.display = "none";
  cadastro.style.display = "block";
}

function mostrarLogin() {
  cadastro.style.display = "none";
  login.style.display = "block";
}

function selecionarTipo(botao) {
  tipo = botao.dataset.tipo;

  document.querySelectorAll(".tipo-botao").forEach((b) => {
    b.classList.remove("ativo");
  });

  botao.classList.add("ativo");
}

async function fazerCadastro(evento) {
  evento.preventDefault();

  const nome = document.getElementById("cadastro-nome").value;
  const email = document.getElementById("cadastro-email").value;
  const senha = document.getElementById("cadastro-senha").value;

  const resposta = await fetch(`${API}/cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      email,
      senha,
      tipo,
    }),
  });

  const dados = await resposta.json();
  msg.innerText = dados.mensagem;

  if (resposta.ok) {
    document.getElementById("form-cadastro").reset();
    mostrarLogin();
  }
}

async function fazerLogin(evento) {
  evento.preventDefault();

  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const resposta = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  const dados = await resposta.json();

  document.getElementById("mensagem-login").textContent = dados.mensagem;

  if (resposta.ok) {
    localStorage.setItem("usuario", JSON.stringify(dados.usuario));

    if (dados.usuario.tipo === "aluno") {
      window.location.href = "aluno.html";
    } else {
      window.location.href = "professor.html";
    }
  }
}
