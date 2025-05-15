// import { verifyToken } from '../middleware/jwt.js'
import { cliente } from './clientes.js'
import { Router } from 'express'

const router = Router()

router.post('/cadastrarCliente', async (req, res) => {
  try {
    const dados = req.body
    await cliente.cadastrarCliente(dados)

    res.status(200).json('Ok!')
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error)
    res.status(500).json({ message: 'Erro ao cadastrar cliente.' })
  }
})

router.post('/loginCliente', async (req, res) => {
  try {
    const dados = req.body
    const retorno = await cliente.loginCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao logar cliente:', error)
    res.status(500).json({ message: 'Erro ao logar cliente.' })
  }
})

export default router
