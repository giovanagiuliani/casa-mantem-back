class BaseError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.httpCode = 500
  }
}

export class BadRequestError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Sintaxe invalida',
      httpCode: 400
    })
  }
}

export class UnauthorizedError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Usuário não autenticado.',
      httpCode: 401
    })
  }
}

export class ForbiddenError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Você não possui permissão para executar esta ação.',
      httpCode: 403
    })
  }
}

export class NotFoundError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Não foi possível encontrar este recurso no sistema.',
      httpCode: 404
    })
  }
}

export class UnprocessableEntityError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Não foi possível realizar esta operação.',
      httpCode: 422
    })
  }
}

export class TooManyRequestsError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Você realizou muitas requisições recentemente.',
      httpCode: 429
    })
  }
}

export class InternalServerError extends BaseError {
  constructor (message) {
    super({
      message: message || 'Um erro interno não esperado aconteceu.',
      httpCode: 500
    })
  }
}
