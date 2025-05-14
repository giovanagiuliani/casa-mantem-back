import { verifyToken } from '../middleware/jwt.js'
import { cliente } from './usuariosfuncoes.js'
import { Router } from 'express'

const router = Router()

router.post('/cadastrarCliente', async (req, res) => {
  try {
    const dados = req.body
    const retorno = await cliente.cadastrarCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error)
    res.status(500).json({ message: 'Erro ao cadastrar cliente.' })
  }
})


export default router