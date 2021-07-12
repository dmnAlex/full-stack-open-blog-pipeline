const healthRouter = require('express').Router()

healthRouter.get('/', async (_req, res) => {
  res.send('ok')
})

module.exports = healthRouter