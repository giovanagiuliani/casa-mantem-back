// import { verifyToken } from '../middleware/jwt.js'
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

export default router
