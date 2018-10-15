const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const message = require('../shared-module-1')

app.use(bodyParser.text())
app.get('/ping', (req, res) => res.send('ok\n'))
app.get('/message', (req, res) => res.send(`${message}\n`))

const server = app.listen(3000, () => {
  process.stdout.write('listening on 3000\n')
})

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(128 + 15)
  })
})
