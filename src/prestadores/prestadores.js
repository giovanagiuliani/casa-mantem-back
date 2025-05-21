import prisma from '../prismaClient.js'
import { createToken } from '../auth/jwt.js'
import bcrypt from 'bcrypt'
const saltRounds = 10

export const prestador = {
  async cadastrarPrestador (dados) {
    try {
      const hash = await bcrypt.hash(dados.senhaprestador, saltRounds)
      const retorno = await prisma.prestadores.create({
        data: {
          nmprestador: dados.nmprestador,
          cpfprestador: dados.cpfprestador,
          emailprestador: dados.emailprestador,
          cidadeprestador: dados.cidadeprestador.label,
          ufprestador: dados.ufprestador.label,
          celularprestador: dados.celularprestador,
          senhaprestador: hash,
          whatsapp: dados.whatsapp
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao cadastrar prestador:', error)
      throw new Error('Erro ao cadastrar prestador')
    }
  },

  async loginPrestador (dados) {
    try {
      const prestador = await prisma.prestadores.findFirst({
        where: {
          cpfprestador: dados.cpfprestador
        },
        select: {
          idprestador: true,
          nmprestador: true,
          senhaprestador: true
        }
      })
      if (!prestador) return null

      const senhaCorreta = await bcrypt.compare(dados.senhaprestador, prestador.senhaprestador)
      if (!senhaCorreta) return null

      const dadosToken = {
        iduser: prestador.idprestador
      }

      const token = createToken(dadosToken)
      const nome = prestador.nmprestador.split(' ')

      return { token, nmprestador: nome[0] }
    } catch (error) {
      console.error('Erro ao logar prestador:', error)
      throw new Error('Erro ao logar prestador')
    }
  }
}
