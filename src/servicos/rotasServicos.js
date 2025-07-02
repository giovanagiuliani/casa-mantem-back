import { verifyToken } from '../middleware/jwt.js'
import { servico } from './servicos.js'
import { Router } from 'express'

const router = Router()

router.post('/buscaListaServicos', async (req, res) => {
  try {
    const dados = req.body
    const retorno = await servico.buscaListaServicos(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar lista de serviços ofertados:', error)
    res.status(500).json({ message: 'Erro ao buscar lista de serviços ofertados.' })
  }
})

router.post('/cadastrarServicoOfertado', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idprestador = req.decodedToken.sub
    const retorno = await servico.cadastrarServicoOfertado(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao cadastrar serviço ofertado:', error)
    res.status(500).json({ message: 'Erro ao cadastrar serviço ofertado.' })
  }
})

router.post('/buscaServicosOfertados', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    if (!dados.idprestador) {
      dados.idprestador = req.decodedToken.sub
    }
    const retorno = await servico.buscaServicosOfertados(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar serviços ofertados:', error)
    res.status(500).json({ message: 'Erro ao buscar serviços ofertados.' })
  }
})

router.post('/excluirServicoOfertado', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    const retorno = await servico.excluirServicoOfertado(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao excluir serviço ofertado:', error)
    res.status(500).json({ message: 'Erro ao excluir serviço ofertado.' })
  }
})

router.post('/buscaDadosServicoOfertado', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    const retorno = await servico.buscaDadosServicoOfertado(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar dados de serviço ofertado:', error)
    res.status(500).json({ message: 'Erro ao buscar dados de serviço ofertado.' })
  }
})

router.post('/atualizarServicoOfertado', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    const retorno = await servico.atualizarServicoOfertado(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao atualizar serviço ofertado:', error)
    res.status(500).json({ message: 'Erro ao atualizar serviço ofertado.' })
  }
})

router.post('/solicitarAgendamento', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idcliente = req.decodedToken.sub
    const retorno = await servico.solicitarAgendamento(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao solicitar agendamento:', error)
    res.status(500).json({ message: 'Erro ao solicitar agendamento.' })
  }
})

router.post('/buscaServicosAguardando', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idcliente = req.decodedToken.sub
    const retorno = await servico.buscaServicosAguardando(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar agendamentos aguardando confirmação:', error)
    res.status(500).json({ message: 'Erro ao buscar agendamentos aguardando confirmação.' })
  }
})

router.post('/cancelarSolicitacaoServico', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idcliente = req.decodedToken.sub
    const retorno = await servico.cancelarSolicitacaoServico(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao cancelar solicitação de agendamento:', error)
    res.status(500).json({ message: 'Erro ao cancelar solicitação de agendamento.' })
  }
})

export default router
