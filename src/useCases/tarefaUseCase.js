
module.exports = class TarefaUseCase {
  constructor({ tarefaRepository }) {
    this.tarefaRepository = tarefaRepository;
  }

  async cadastrar(tarefa) {
    const tarefaCriada = await this.tarefaRepository.criar(tarefa);
    return tarefaCriada;
  }

  async listar() {
    const tarefas = await this.tarefaRepository.listar();
    return tarefas;
  }

  async buscarPorId(id) {
    const tarefa = await this.tarefaRepository.buscarPorId(id);
    return tarefa;
  }

  async atualizar(id, tarefa) {
    const tarefaAtualizada = await this.tarefaRepository.atualizar(id, tarefa);
    return tarefaAtualizada;
  }

  async excluir(id) {
    const excluido = await this.tarefaRepository.excluir(id);
    return excluido;
  }
};