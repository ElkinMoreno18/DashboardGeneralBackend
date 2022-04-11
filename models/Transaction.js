const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    let Transaction = sequelize.define('Transaction', {
        id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
        action: { type: Sequelize.STRING(200), allowNull: false },
        detail: { type: Sequelize.TEXT, allowNull: true},
        date: { type: Sequelize.DATE, allowNull: false},
        username: { type: Sequelize.STRING(45), allowNull: false},
    }, 
    { 
        tableName: 'transaction',
        createdAt: false,
        updatedAt: false
    });
  
    return Transaction;
  };