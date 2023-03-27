const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Importa a conexão com o banco de dados
const database = require("./database");

// Verifica se a conexão com o banco de dados foi estabelecida com sucesso
database
  .authenticate()
  .then(() =>
    console.log("Conexão com o banco de dados estabelecida com sucesso.")
  )
  .catch((err) => console.log(`Erro ao conectar com o banco de dados: ${err}`));

app.use(bodyParser.json());
const tarefaRoutes = require("./routes/routes");
app.use("/api/tarefas", tarefaRoutes);

// Tratamento de erros
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
