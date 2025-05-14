/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function exemplo (req, res) {
  res.status(200).send({ hello: 'hello world' })
}
