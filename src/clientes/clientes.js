import prisma from '../prismaClient.js'
import { createToken } from '../auth/jwt.js'
import bcrypt from 'bcrypt'
const saltRounds = 10

export const cliente = {
  async cadastrarCliente (dados) {
    try {
      const hash = await bcrypt.hash(dados.senhacliente, saltRounds)

      const retorno = await prisma.clientes.create({
        data: {
          nmcliente: dados.nmcliente,
          emailcliente: dados.emailcliente,
          senhacliente: hash
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error)
      throw new Error('Erro ao cadastrar cliente')
    }
  },

  async loginCliente (dados) {
    try {
      const cliente = await prisma.clientes.findFirst({
        where: {
          emailcliente: dados.emailcliente
        },
        select: {
          idcliente: true,
          nmcliente: true,
          senhacliente: true,
          emailcliente: true
        }
      })
      if (!cliente) return null

      const senhaCorreta = await bcrypt.compare(dados.senhacliente, cliente.senhacliente)
      if (!senhaCorreta) return null

      const dadosToken = {
        idcliente: cliente.idcliente
      }

      const token = createToken(dadosToken)
      const nome = cliente.nmcliente.split(' ')

      return { token, nmcliente: nome[0] }
    } catch (error) {
      console.error('Erro ao logar cliente:', error)
      throw new Error('Erro ao logar cliente')
    }
  }
}
