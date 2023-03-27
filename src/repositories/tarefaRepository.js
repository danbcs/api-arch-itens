const Tarefa = require("../entities/tarefa");

module.exports = class TarefaRepository {
  constructor({ tarefaModel }) {
    this.tarefaModel = tarefaModel;
  }

  async criar(tarefa) {
    const tarefaCriada = await this.tarefaModel.create(tarefa);
    return new Tarefa(tarefaCriada);
  }

  async listar() {
    const tarefas = await this.tarefaModel.findAll();
    return tarefas.map((tarefa) => new Tarefa(tarefa));
  }

  async buscarPorId(id) {
    const tarefa = await this.tarefaModel.findByPk(id);
    if (!tarefa) {
      return null;
    }
    return new Tarefa(tarefa);
  }

  async atualizar(id, tarefa) {
    const [linhasAfetadas] = await this.tarefaModel.update(tarefa, { where: { id } });
    if (linhasAfetadas === 0) {
      return null;
    }
    return this.buscarPorId(id);
  }

  async excluir(id) {
    const linhasAfetadas = await this.tarefaModel.destroy({ where: { id } });
    return linhasAfetadas > 0;
  }
};
