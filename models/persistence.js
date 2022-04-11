module.exports = (sequelize, activeDirectory) => {
  const Transaction = require('./Transaction')(sequelize)

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

  return {
    registerTransaction(action, detail, username) {
      let date = new Date()
      Transaction.create({ action, detail, username, date })
    },
    doesHehavePermission(username, permission, callback) {
      activeDirectory.isUserMemberOf(username, permission, function(err, isMember) {
        if (err) {
          console.log(err);
          return callback(true, err)
        }
        return callback(false, isMember)
      });
    },
    getTransactions(callback){
      Transaction.findAll().then(transactions => {
        return callback(false, transactions)
      }).catch(err => {
        console.log(err);
        return callback(true, { statusCode: 500, errors: err })
      })
    },
    getTransactionsByUsername(username, callback){
      Transaction.findAll({ where: { username }}).then(transactions => {
        return callback(false, transactions)
      }).catch(err => {
        console.log(err);
        return callback(true, { statusCode: 500, errors: err })
      })
    }
  }
}