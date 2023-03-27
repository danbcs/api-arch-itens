
module.exports = class TarefaController {
  constructor({ tarefaUseCase }) {
    this.tarefaUseCase = tarefaUseCase;
  }

  async cadastrar(req, res) {
    const tarefa = req.body;
    const tarefaCriada = await this.tarefaUseCase.cadastrar(tarefa);
    return res.status(201).json(tarefaCriada);
  }

  async listar(req, res) {
    const tarefas = await this.tarefaUseCase.listar();
    return res.json(tarefas);
  }

  async buscarPorId(req, res) {
    const { id } = req.params;
    const tarefa = await this.tarefaUseCase.buscarPorId(id);
    if (!tarefa) {
      return res.status(404).send();
    }
    return res.json(tarefa);
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const tarefa = req.body;
    const tarefaAtualizada = await this.tarefaUseCase.atualizar(id, tarefa);
    if (!tarefaAtualizada) {
      return res.status(404).send();
    }
    return res.json(tarefaAtualizada);
  }

  async excluir(req, res) {
    const { id } = req.params;
    const excluido = await this.tarefaUseCase.excluir(id);
    if (!excluido) {
      return res.status(404).send();
    }
    return res.status(204).send();
  }
};
