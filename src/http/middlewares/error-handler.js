// import { prisma } from '../../prismaClient.js'
// import { v4 as uuidv4 } from 'uuid'

// todo que ocorrer sempre passará por esse enpoint 
// todos os erros devem ser tratados aqui

/**
 * @type {import('express').ErrorRequestHandler}
 */
export async function errorHandler (err, req, res, next) {
  // const uuid = uuidv4()

  // abaixo é um exemplo de estrutura de erro no banco de dados
  // await prisma.errorlog.create({
  //  data: {
  //    errorid: uuid,
  //    errorhttpcode: err?.httpCode || 500,
  //    errorinstance: err.name,
  //    errormessage: err.message,
  //    errorstack: err?.stack
  //  }
  // })

  res.status(err.httpCode || 500).send({ message: err.message })
}
