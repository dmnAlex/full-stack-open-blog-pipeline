const versionRouter = require('express').Router()

versionRouter.get('/', async (_req, res) => {
  res.send('1.0')
})

module.exports = versionRouter