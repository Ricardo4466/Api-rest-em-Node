const express = require("express");

const routes = express.Router();

const pedidosController = require("./controllers/pedidos");

// ROTAS

routes.post("/pedidos", pedidosController.receberPedido);

routes.get("/pedidos", pedidosController.listarPedido);

module.exports = routes;