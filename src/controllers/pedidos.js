const Pedido = require("../models/pedidos");
const { Op } = require("sequelize");
module.exports =
{
    async listarPedido(req, res) {
        const cliente = req.query.nome;
        try {
            if (!cliente) {
                const pedidos = await Pedido.findAll();
                res.send(pedidos);
            }
            else {
                const pedidos = await Pedido.findAll({
                    where: {
                        cliente: { [Op.like]: `%${cliente}%` }
                    }

                },
                    {
                        attributes: ["id", "cliente", "produto", "quantidade"]
                    }
                )
                res.send(pedidos);
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).send({ error });
        }
    },

    async receberPedido(req, res) {
        const { cliente, produto, quantidade } = req.body;
        try {
            pedido = await Pedido.create({ cliente, produto, quantidade });
            res.status(201).send(pedido);


        }
        catch (error) {
            console.log(error);
            res.status(500).send({ error });
        }
    }

}