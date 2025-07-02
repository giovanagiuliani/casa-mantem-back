import prisma from '../prismaClient.js'

export const servico = {
  async buscaListaServicos () {
    try {
      const listaServicos = await prisma.servicos.findMany({
        orderBy: {
          nmservico: 'asc'
        }
      })

      const retorno = listaServicos.map(servico => ({
        value: servico.idservico,
        label: servico.nmservico
      }))

      return retorno
    } catch (error) {
      console.error('Erro ao buscar lista de serviços ofertados:', error)
      throw new Error('Erro ao buscar lista de serviços ofertados')
    }
  },

  async cadastrarServicoOfertado (dados) {
    try {
      const retorno = await prisma.servicosprestadores.create({
        data: {
          idprestador: dados.idprestador,
          idservico: dados.idservico.value,
          observacao: dados.observacao,
          tipocargahoraria: dados.tipocargahoraria
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao cadastrar serviço ofertado:', error)
      throw new Error('Erro ao cadastrar serviço ofertado')
    }
  },

  async buscaServicosOfertados (dados) {
    try {
      const retorno = await prisma.$queryRaw`
      select t4.nmservico, t4.idservico, t5.observacao, t5.tipocargahoraria, t5.idservicoprestador from servicosprestadores t5
      inner join servicos t4 on(t4.idservico = t5.idservico)
      where t5.idprestador = ${dados.idprestador}
      `

      return retorno
    } catch (error) {
      console.error('Erro ao buscar serviços ofertados:', error)
      throw new Error('Erro ao buscar serviços ofertados')
    }
  },

  async excluirServicoOfertado (dados) {
    try {
      const retorno = await prisma.servicosprestadores.delete({
        where: {
          idservicoprestador: dados.idservicoprestador
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao excluir serviço ofertado:', error)
      throw new Error('Erro ao excluir serviço ofertado')
    }
  },

  async buscaDadosServicoOfertado (dados) {
    try {
      const servico = await prisma.$queryRaw`
      select t4.nmservico, t4.idservico, t5.observacao, t5.tipocargahoraria from servicosprestadores t5
      inner join servicos t4 on(t4.idservico = t5.idservico)
      where t5.idservicoprestador = ${dados.idservicoprestador}
      `

      const retorno = {
        idservico: {
          label: servico[0].nmservico,
          value: servico[0].idservico
        },
        observacao: servico[0].observacao,
        tipocargahoraria: servico[0].tipocargahoraria
      }

      return retorno
    } catch (error) {
      console.error('Erro ao buscar dados de serviço ofertado:', error)
      throw new Error('Erro ao buscar dados de serviço ofertado')
    }
  },

  async atualizarServicoOfertado (dados) {
    try {
      const retorno = await prisma.servicosprestadores.update({
        where: {
          idservicoprestador: dados.idservicoprestador
        },
        data: {
          idservico: dados.idservico.value,
          tipocargahoraria: dados.tipocargahoraria,
          observacao: dados.observacao
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao atualizar serviço ofertado:', error)
      throw new Error('Erro ao atualizar serviço ofertado')
    }
  },

  async solicitarAgendamento (dados) {
    try {
      const retorno = await prisma.servicosagendados.create({
        data: {
          dtprevisto: dados.dtprevisto,
          horainicio: dados.horainicio,
          idcliente: dados.idcliente,
          idprestador: dados.idprestador,
          idservico: dados.idservico,
          situacao: dados.situacao,
          horafim: dados.horafim
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao solicitar agendamento:', error)
      throw new Error('Erro ao solicitar agendamento')
    }
  },

  async buscaServicosAguardando (dados) {
    try {
      const retorno = await prisma.$queryRaw`
      select t6.*, t3.nmprestador, t3.fotoprestador, t4.nmservico, t2.logradouro, t2.bairro, t2.numero, t2.complemento,
      exists (
        select 1 from favoritoscliente t10 
        where t10.idprestador = t3.idprestador and t10.idcliente = ${dados.idcliente}
      ) as favorito
      from servicosagendados t6
      inner join prestadores t3 on (t3.idprestador = t6.idprestador)
      inner join servicosprestadores t5 on (t5.idprestador = t3.idprestador)
      inner join servicos t4 on (t4.idservico = t5.idservico)
      inner join enderecoscliente t2 on (t2.idcliente = ${dados.idcliente})
      where t6.idcliente = ${dados.idcliente}
      and t6.situacao = 1
      `

      return retorno
    } catch (error) {
      console.error('Erro ao buscar agendamentos aguardando confirmação:', error)
      throw new Error('Erro ao buscar agendamentos aguardando confirmação')
    }
  },

  async cancelarSolicitacaoServico (dados) {
    try {
      const retorno = await prisma.servicosagendados.update({
        where: {
          idservicoagendado: dados.idservicoagendado
        },
        data: {
          situacao: 3
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao cancelar solicitação de agendamento:', error)
      throw new Error('Erro ao cancelar solicitação de agendamento')
    }
  }
}
