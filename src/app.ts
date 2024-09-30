import express from 'express'
import cors from 'cors'
import Router from './routers'
import NotFountHandler from './MeddleWare/NotFoundHandler'
import globalErrorHandler from './MeddleWare/GlobalErrorHandler'

// app
const app = express()

// madelware
app.use(cors())
app.use(express.json())

app.use('/api', Router)

app.get('/', (req, res) => {
  res.send('Assignment-3')
})

app.use(NotFountHandler)
app.use(globalErrorHandler)

export default app
