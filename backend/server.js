const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [];

app.post("/api/cadastro", (req, res) => {
  const { nome, email, senha, tipo } = req.body;

  const existe = usuarios.find(({usuario}) => usuario.email === email);

  if (existe) {
    return res.status(400).json({
      mensagem: "Email já cadastrado.",
    });
  }

  usuarios.push({
    id: Date.now,
    nome,
    email,
    senha,
    tipo,
  });

  res.json({
    mensagem: "Conta criada!",
  });
});

app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha,
  );

  if (!usuario) {
    return res.status(401).json({
      mensagem: "Email ou senha incorretos.",
    });
  }

  res.json({
    mensagem: "Login realizado!",
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo,
    },
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
