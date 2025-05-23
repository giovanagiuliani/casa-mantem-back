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
      select t4.nmservico, t5.observacao, t5.tipocargahoraria, t5.idservicoprestador from servicosprestadores t5
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
  }
}
