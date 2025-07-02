import { verifyToken } from '../middleware/jwt.js'
import { prestador } from './prestadores.js'
import { Router } from 'express'
import axios from 'axios'

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
    if (!dados.idprestador) {
      dados.idprestador = req.decodedToken.sub
    }
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

router.post('/atualizarDadosPrestador', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idprestador = req.decodedToken.sub
    const retorno = await prestador.atualizarDadosPrestador(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao atualizar dados do prestador:', error)
    res.status(500).json({ message: 'Erro ao atualizar dados do prestador.' })
  }
})

router.post('/buscaUnidadesFederativas', async (req, res) => {
  try {
    const retorno = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')

    res.status(200).json(retorno.data)
  } catch (error) {
    console.error('Erro ao buscar unidades federativas:', error)
    res.status(500).json({ message: 'Erro ao buscar unidades federativas.' })
  }
})

router.post('/buscaCidades', async (req, res) => {
  try {
    const dados = req.body
    const retorno = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${dados.ufprestador}/municipios?orderBy=nome`)

    res.status(200).json(retorno.data)
  } catch (error) {
    console.error('Erro ao buscar unidades federativas:', error)
    res.status(500).json({ message: 'Erro ao buscar unidades federativas.' })
  }
})

router.post('/buscaPrestadoresLocal', async (req, res) => {
  try {
    const dados = req.body
    const retorno = await prestador.buscaPrestadoresLocal(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar prestadores da localidade:', error)
    res.status(500).json({ message: 'Erro ao buscar prestadores da localidade.' })
  }
})

export default router
