export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais invalidas! Usuario ou senha incorretos')
  }
}
