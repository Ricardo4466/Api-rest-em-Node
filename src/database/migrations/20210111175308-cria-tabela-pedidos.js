'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("pedidos", {
      //aqui dizemos o que deve ser feito
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
      cliente: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at :{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("pedidos");
  }
};