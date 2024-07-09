import { SigninUseCase } from '../signin'
import { UserRepository } from '@/repositories/user.repository'

export function makeSigninUseCase() {
  const userRepository = new UserRepository()
  const signinUseCase = new SigninUseCase(userRepository)

  return signinUseCase
}
