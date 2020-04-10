import path = require('path')
import express = require('express')

import * as stores from './store'
import * as conf from './conf'


const app: express.Express = express()


app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use('/public', express.static(path.join(__dirname, '../static')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/api/list', (_:express.Request, res:express.Response) => {
  res.send('')
})

router.get('/api/create', (req:express.Request, res:express.Response) => {
  // exists param -apikey
  res.send(req.params.toString())
})
router.post('/api/vote', (_:express.Request, res:express.Response) => {
  const _name:string = ""
  const _now:Date = new Date()
  stores.updateHash(_name, _now)
  res.send('')
})
router.post('/api/update', (_:express.Request, res:express.Response) => {
  res.send('')
})

app.use(router)

app.listen(conf.PORT, () => {
  console.log('start')
})
