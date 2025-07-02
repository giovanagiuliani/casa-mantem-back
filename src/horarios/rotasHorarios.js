import { verifyToken } from '../middleware/jwt.js'
import { horario } from './horarios.js'
import { Router } from 'express'

const router = Router()

router.post('/buscaHorariosPrestador', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    if (!dados.idprestador) {
      dados.idprestador = req.decodedToken.sub
    }
    const retorno = await horario.buscaHorariosPrestador(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar horários do prestador:', error)
    res.status(500).json({ message: 'Erro ao buscar horários do prestador.' })
  }
})

export default router
