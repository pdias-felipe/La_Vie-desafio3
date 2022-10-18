const express = require('express');
const psicologosController = require('../controllers/psicologosController')
const pacientesController = require('../controllers/pacientesController')


const routes = express.Router();


//rotas psicologo (terminar)
routes.get('/psicologos', psicologosController.listarPsicologos)
routes.get('/psicologos/:id', psicologosController.listarPsicologoId);
routes.post('/psicologos', psicologosController.cadastrarPsicologo);
routes.put('/psicologos/:id', psicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo);




//rotas pacientes

routes.get('/pacientes', pacientesController.listarPacientes)
routes.get('/pacientes/:id', pacientesController.listarPacienteId);
routes.post('/pacientes', pacientesController.cadastrarPaciente);
routes.put('/pacientes/:id', pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id', pacientesController.deletarPaciente);




//rotas atendimentos





module.exports = routes;