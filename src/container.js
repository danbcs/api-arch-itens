const { Sequelize } = require("sequelize");
const TarefaModel = require("./entities/tarefa");
const TarefaRepository = require("./repositories/tarefaRepository");
const TarefaUseCase = require("./useCases/tarefaUseCase");
const TarefaController = require("./controllers/tarefaController");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || "mydatabase",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "mypassword",
});

const tarefaModel = TarefaModel.init(sequelize);
const tarefaRepository = new TarefaRepository({ tarefaModel });
const tarefaUseCase = new TarefaUseCase({ tarefaRepository });
console.log(tarefaUseCase);
const tarefaController = new TarefaController({ tarefaUseCase });

module.exports = {
  tarefaController,
};