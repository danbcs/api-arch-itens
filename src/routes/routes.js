const express = require('express');
const { tarefaController } = require('../container');
const router = express.Router();
//const TarefaController = require('../controllers/tarefaController');

//const tarefaController = container.resolve('tarefaController');

//console.log(tarefaController.listar);

router.get('/', tarefaController.listar.bind(tarefaController));
router.get('/:id', tarefaController.buscarPorId.bind(tarefaController));
router.post('/', tarefaController.cadastrar.bind(tarefaController));
router.put('/:id', tarefaController.atualizar.bind(tarefaController));
router.delete('/:id', tarefaController.excluir.bind(tarefaController));

module.exports = router;