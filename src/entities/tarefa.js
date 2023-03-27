const { Sequelize, Model } = require("sequelize");

class Tarefa extends Model {
  static init(sequelize) {
    return super.init(
      {
        categoryId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          field: "id",
          autoIncrement: true,
        },
        dateUpdated: {
          type: Sequelize.DATE,
          field: "updated_at",
          defaultValue: Sequelize.NOW,
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        concluida: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: "Tarefa",
      }
    );
  }
}

module.exports = Tarefa;
