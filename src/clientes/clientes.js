import prisma from '../prismaClient.js'
import { createToken } from '../auth/jwt.js'
import bcrypt from 'bcrypt'
const saltRounds = 10

export const cliente = {
  async cadastrarCliente (dados) {
    try {
      const hashsenha = await bcrypt.hash(dados.senhacliente, saltRounds)

      const retorno = await prisma.clientes.create({
        data: {
          nmcliente: dados.nmcliente,
          emailcliente: dados.emailcliente,
          senhacliente: hashsenha
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
        iduser: cliente.idcliente,
        tipologin: 1
      }

      const token = createToken(dadosToken)
      const nome = cliente.nmcliente.split(' ')

      return { token, nmcliente: nome[0], tipologin: 1 }
    } catch (error) {
      console.error('Erro ao logar cliente:', error)
      throw new Error('Erro ao logar cliente')
    }
  },

  async buscaDadosCliente (dados) {
    try {
      const retorno = await prisma.clientes.findFirst({
        where: {
          idcliente: dados.idcliente
        },
        select: {
          emailcliente: true,
          nmcliente: true
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao buscar dados do cliente:', error)
      throw new Error('Erro ao buscar dados do cliente')
    }
  },

  async buscaEnderecosCliente (dados) {
    try {
      const retorno = await prisma.enderecoscliente.findMany({
        where: {
          idcliente: dados.idcliente
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao buscar endereços do cliente:', error)
      throw new Error('Erro ao buscar endereços do cliente')
    }
  },

  async cadastrarEnderecoCliente (dados) {
    try {
      const retorno = await prisma.enderecoscliente.create({
        data: {
          cep: dados.cep,
          bairro: dados.bairro,
          cidadecliente: dados.cidadecliente,
          idcliente: dados.idcliente,
          logradouro: dados.logradouro,
          ufcliente: dados.ufcliente,
          complemento: dados.complemento,
          numero: dados.numero
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao cadastrar endereço do cliente:', error)
      throw new Error('Erro ao cadastrar endereço do cliente')
    }
  },

  async excluirEnderecoCliente (dados) {
    try {
      const retorno = await prisma.enderecoscliente.delete({
        where: {
          idenderecocliente: dados.idenderecocliente
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao excluir endereço do cliente:', error)
      throw new Error('Erro ao excluir endereço do cliente')
    }
  },

  async buscaDadosEndereco (dados) {
    try {
      const retorno = await prisma.enderecoscliente.findFirst({
        where: {
          idenderecocliente: dados.idenderecocliente
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao buscar dados de endereço do cliente:', error)
      throw new Error('Erro ao buscar dados de endereço do cliente')
    }
  },

  async atualizarEnderecoCliente (dados) {
    try {
      const retorno = await prisma.enderecoscliente.update({
        where: {
          idenderecocliente: dados.idenderecocliente
        },
        data: {
          bairro: dados.bairro,
          cep: dados.cep,
          cidadecliente: dados.cidadecliente,
          complemento: dados.complemento,
          logradouro: dados.logradouro,
          numero: dados.numero,
          ufcliente: dados.ufcliente
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao atualizar endereço do cliente:', error)
      throw new Error('Erro ao atualizar endereço do cliente')
    }
  },

  async alterarSenhaCliente (dados) {
    try {
      const hashsenha = await bcrypt.hash(dados.novaSenha, saltRounds)
      const retorno = await prisma.clientes.update({
        where: {
          idcliente: dados.idcliente
        },
        data: {
          senhacliente: hashsenha
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao alterar senha do cliente:', error)
      throw new Error('Erro ao alterar senha do cliente')
    }
  },

  async atualizarDadosCliente (dados) {
    try {
      const retorno = await prisma.clientes.update({
        where: {
          idcliente: dados.idcliente
        },
        data: {
          nmcliente: dados.nmcliente,
          emailcliente: dados.emailcliente
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao atualizar dados do cliente:', error)
      throw new Error('Erro ao atualizar dados do cliente')
    }
  },

  async favDesfavPrestador (dados) {
    try {
      let retorno
      const fav = await prisma.favoritoscliente.findFirst({
        where: {
          idprestador: dados.idprestador,
          idcliente: dados.idcliente
        }
      })

      if (fav) {
        retorno = await prisma.favoritoscliente.delete({
          where: {
            idfavoritocliente: fav.idfavoritocliente
          }
        })
      } else {
        retorno = await prisma.favoritoscliente.create({
          data: {
            idcliente: dados.idcliente,
            idprestador: dados.idprestador
          }
        })
      }

      return retorno
    } catch (error) {
      console.error('Erro ao favoritar/desfavoritar prestador:', error)
      throw new Error('Erro ao favoritar/desfavoritar prestador')
    }
  },

  async buscaPrestadoresFavoritos (dados) {
    try {
      const retorno = await prisma.$queryRaw`
      select t3.nmprestador, t3.celularprestador, t3.emailprestador, t3.fotoprestador, t3.cidadeprestador, t3.ufprestador, 
      t3.whatsapp, t3.idprestador, t10.idcliente, t10.idfavoritocliente, json_agg(json_build_object('idservico', t4.idservico, 'nmservico', t4.nmservico)) AS servicos,
      exists (
        select 1 from favoritoscliente t10 
        where t10.idprestador = t3.idprestador and t10.idcliente = ${dados.idcliente}
      ) as favorito
      from favoritoscliente t10
      inner join prestadores t3 on (t3.idprestador = t10.idprestador)
      inner join servicosprestadores t5 on (t5.idprestador = t3.idprestador)
      inner join servicos t4 on (t5.idservico = t4.idservico)
      where t10.idcliente = ${dados.idcliente}
      group by t3.nmprestador, t3.celularprestador, t3.emailprestador, t3.fotoprestador, t3.cidadeprestador, t3.ufprestador, 
      t3.whatsapp, t3.idprestador, t10.idcliente, t10.idfavoritocliente
      `

      return retorno
    } catch (error) {
      console.error('Erro ao buscar lista de prestadores favoritos:', error)
      throw new Error('Erro ao buscar lista de prestadores favoritos')
    }
  }
}
