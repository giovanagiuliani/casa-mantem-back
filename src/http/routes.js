import { errorHandler } from './middlewares/error-handler.js'
import { exemplo } from './controllers/exemplo.js'

/** @param {import('express').Application} app */
export function appRouter (app) {

  // exemplo de rota
  app.get('/', exemplo)

  // a rota abaixa deve sempre ser a ultima
  app.use(errorHandler)
}
