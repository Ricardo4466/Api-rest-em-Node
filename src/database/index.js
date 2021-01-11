const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Pedido = require("../models/pedidos");

const conexao = new Sequelize(dbConfig);

Pedido.init(conexao);

Pedido.associate(conexao.models);