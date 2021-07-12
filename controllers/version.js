const versionRouter = require('express').Router()

versionRouter.get('/', (_req, res) => {
  res.send('1.0')
})

module.exports = versionRouter