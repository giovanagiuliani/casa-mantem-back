import { verifyToken } from '../middleware/jwt.js'
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

router.post('/buscaDadosCliente', verifyToken, async (req, res) => {
  try {
    const dados = {}
    dados.idcliente = req.decodedToken.sub
    const retorno = await cliente.buscaDadosCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar dados do cliente:', error)
    res.status(500).json({ message: 'Erro ao buscar dados do cliente.' })
  }
})

router.post('/buscaEnderecosCliente', verifyToken, async (req, res) => {
  try {
    const dados = {}
    dados.idcliente = req.decodedToken.sub
    const retorno = await cliente.buscaEnderecosCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar endereços do cliente:', error)
    res.status(500).json({ message: 'Erro ao buscar endereços do cliente.' })
  }
})

router.post('/cadastrarEnderecoCliente', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idcliente = req.decodedToken.sub
    const retorno = await cliente.cadastrarEnderecoCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao cadastrar endereço do cliente:', error)
    res.status(500).json({ message: 'Erro ao cadastrar endereço do cliente.' })
  }
})

router.post('/excluirEnderecoCliente', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    const retorno = await cliente.excluirEnderecoCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao excluir endereço do cliente:', error)
    res.status(500).json({ message: 'Erro ao excluir endereço do cliente.' })
  }
})

router.post('/buscaDadosEndereco', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    const retorno = await cliente.buscaDadosEndereco(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao buscar dados de endereço do cliente:', error)
    res.status(500).json({ message: 'Erro ao buscar dados de endereço do cliente.' })
  }
})

router.post('/atualizarEnderecoCliente', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    const retorno = await cliente.atualizarEnderecoCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao atualizar endereço do cliente:', error)
    res.status(500).json({ message: 'Erro ao atualizar endereço do cliente.' })
  }
})

router.post('/alterarSenhaCliente', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idcliente = req.decodedToken.sub
    const retorno = await cliente.alterarSenhaCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao alterar senha do cliente:', error)
    res.status(500).json({ message: 'Erro ao alterar senha do cliente.' })
  }
})

router.post('/atualizarDadosCliente', verifyToken, async (req, res) => {
  try {
    const dados = req.body
    dados.idcliente = req.decodedToken.sub
    const retorno = await cliente.atualizarDadosCliente(dados)

    res.status(200).json(retorno)
  } catch (error) {
    console.error('Erro ao atualizar dados do cliente:', error)
    res.status(500).json({ message: 'Erro ao atualizar dados do cliente.' })
  }
})

export default router
