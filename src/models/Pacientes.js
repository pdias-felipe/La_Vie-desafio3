const db = require('../database');
const { DataTypes } = require('sequelize');
const Psicologos = require('./psicologos');

const Pacientes = db.define('Pacientes', 
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },

    nome: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },

    idade: {
        type: DataTypes.DATE
    },

    paciente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: 'id',
        }
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, 
{
   tableName: 'pacientes',
});


module.exports = Pacientes;