const versionRouter = require('express').Router()

versionRouter.get('/', async (_req, res) => {
  res.send('1.07')
})

module.exports = versionRouter