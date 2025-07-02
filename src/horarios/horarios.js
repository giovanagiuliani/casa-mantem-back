import prisma from '../prismaClient.js'

export const horario = {
  async buscaHorariosPrestador (dados) {
    try {
      const retorno = await prisma.horariosprestador.findMany({
        where: {
          idprestador: dados.idprestador
        }
      })

      return retorno
    } catch (error) {
      console.error('Erro ao buscar horários do prestador:', error)
      throw new Error('Erro ao buscar horários do prestador')
    }
  }
}
