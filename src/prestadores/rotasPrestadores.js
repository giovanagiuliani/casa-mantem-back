import { verifyToken } from '../middleware/jwt.js'
import { prestador } from './prestadores.js'
import { Router } from 'express'

const router = Router()

router.post('/cadastrarPrestador', async (req, res) => {
  try {
    const dados = req.body
    await prestador.cadastrarPrestador(dados)

    res.status(200).json('Ok!')
  } catch (error) {
    console.error('Erro ao cadastrar prestador:', error)
    res.status(500).json({ message: 'Erro ao cadastrar prestador.' })
  }
})

router.post('/loginPrestador', async (req, res) => {
  try {
    const dados = req.body
    const retorno = await prestador.loginPrestador(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao logar prestador:', error)
    res.status(500).json({ message: 'Erro ao logar prestador.' })
  }
})

router.post('/buscaDadosPrestador', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idprestador = req.decodedToken.sub
    const retorno = await prestador.buscaDadosPrestador(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar dados do prestador:', error)
    res.status(500).json({ message: 'Erro ao buscar dados do prestador.' })
  }
})

router.post('/alterarSenhaPrestador', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idprestador = req.decodedToken.sub
    const retorno = await prestador.alterarSenhaPrestador(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao alterar senha do prestador:', error)
    res.status(500).json({ message: 'Erro ao alterar senha do prestador.' })
  }
})

export default router
