const Sequelize = require("sequelize");

const Tarefa = require("./entities/tarefa");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || "mydatabase",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "mypassword",
});

const models = {
    Tarefa: Tarefa.init(sequelize),
  };
  

sequelize
  .sync({ force: false }) // force: true para recriar as tabelas
  .then(() => {
    console.log("Tabelas sincronizadas");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar tabelas", err);
  });

module.exports = sequelize;
