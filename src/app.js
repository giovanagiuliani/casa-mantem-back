import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import whitelist from './whitelist.js'
import clientesRouter from './clientes/rotasClientes.js'

import { appRouter } from './http/routes.js'

export const app = express()

app.use(express.urlencoded({ limit: '25mb', extended: true }))
app.use(express.json({ limit: '25mb', extended: true }))

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors())
app.use(helmet())
app.use(cors(corsOptions))

app.use('/clientes', clientesRouter)

appRouter(app)
