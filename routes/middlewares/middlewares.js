module.exports = (persistence) => {
  let messages = require('../../utilities/messages.json')

  let sessionChecker = (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(401).send({ errors: messages.errors.notAuthorized })
    }
    next()
  }

  let doesHehavePermission = function (permission) {
    return function (req, res, next) {
      persistence.doesHehavePermission(req.session.user, permission, function (err, data) {
        if (err) {
          return res.status(500).send({ errors: messages.errors.internalError })
        }
        if (!data) {
          return res.status(401).send({ errors: messages.errors.notAuthorized })
        }
        next()
      })
    }
  }

  return { sessionChecker, doesHehavePermission }
}