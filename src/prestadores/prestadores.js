import prisma from '../prismaClient.js'
import { createToken } from '../auth/jwt.js'
import bcrypt from 'bcrypt'
const saltRounds = 10

export const prestador = {
  async cadastrarPrestador (dados) {
    try {
      const hashsenha = await bcrypt.hash(dados.senhaprestador, saltRounds)
      const retorno = await prisma.prestadores.create({
        data: {
          nmprestador: dados.nmprestador,
          cpfprestador: dados.cpfprestador,
          emailprestador: dados.emailprestador,
          cidadeprestador: dados.cidadeprestador.label,
          ufprestador: dados.ufprestador.label,
          celularprestador: dados.celularprestador,
          senhaprestador: hashsenha,
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

      return { token, nmprestador: nome[0], tipologin: 2 }
    } catch (error) {
      console.error('Erro ao logar prestador:', error)
      throw new Error('Erro ao logar prestador')
    }
  },

  async buscaDadosPrestador (dados) {
    try {
      const retorno = await prisma.prestadores.findFirst({
        where: {
          idprestador: dados.idprestador
        },
        select: {
          nmprestador: true,
          cpfprestador: true,
          emailprestador: true,
          celularprestador: true,
          cidadeprestador: true,
          ufprestador: true,
          fotoprestador: true,
          whatsapp: true
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao buscar dados do prestador:', error)
      throw new Error('Erro ao buscar dados do prestador')
    }
  },

  async alterarSenhaPrestador (dados) {
    try {
      const hashsenha = await bcrypt.hash(dados.novaSenha, saltRounds)
      const retorno = await prisma.prestadores.update({
        where: {
          idprestador: dados.idprestador
        },
        data: {
          senhaprestador: hashsenha
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao alterar senha do prestador:', error)
      throw new Error('Erro ao alterar senha do prestador')
    }
  },

  async atualizarDadosPrestador (dados) {
    try {
      const retorno = await prisma.prestadores.update({
        where: {
          idprestador: dados.idprestador
        },
        data: {
          celularprestador: dados.celularprestador,
          cidadeprestador: dados.cidadeprestador,
          cpfprestador: dados.cpfprestador,
          emailprestador: dados.emailprestador,
          nmprestador: dados.nmprestador,
          ufprestador: dados.ufprestador,
          whatsapp: dados.whatsapp
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao atualizar dados do prestador:', error)
      throw new Error('Erro ao atualizar dados do prestador')
    }
  },

  async buscaPrestadoresLocal (dados) {
    try {
      const retorno = await prisma.$queryRaw`
      select t3.idprestador, t3.nmprestador, t3.cidadeprestador, t3.ufprestador, t3.fotoprestador, 
      json_agg(json_build_object('idservico', t4.idservico, 'nmservico', t4.nmservico)) AS servicos
      from prestadores t3
      inner join servicosprestadores t5 on (t5.idprestador = t3.idprestador)
      inner join servicos t4 on (t5.idservico = t4.idservico)
      where t3.cidadeprestador = ${dados.cidade}
      and t3.ufprestador = ${dados.uf}
      and (${dados.idservico}::int IS NULL OR t5.idservico = ${dados.idservico})
      group by t3.idprestador, t3.nmprestador, t3.cidadeprestador, t3.ufprestador, t3.fotoprestador
      `

      return retorno
    } catch (error) {
      console.error('Erro ao buscar prestadores da localidade:', error)
      throw new Error('Erro ao buscar prestadores da localidade')
    }
  }
}
