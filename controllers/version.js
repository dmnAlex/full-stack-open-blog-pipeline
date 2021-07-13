const versionRouter = require('express').Router()

versionRouter.get('/', async (_req, res) => {
  res.send('1.06')
})

module.exports = versionRouter