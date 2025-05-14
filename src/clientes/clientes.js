import prisma from '../prismaClient.js'
import { createToken } from '../auth/jwt.js'

export const cliente = {
  async cadastrarCliente (dados) {
    try {
      const retorno = await prisma
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error)
      throw new Error('Erro ao cadastrar cliente')
    }
  }
}