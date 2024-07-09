import { UserRespository } from '@/repositories/user.repository'
import { CreateUserUseCase } from '../create-user'

export function makeCreateUserUseCase() {
  const userRepository = new UserRespository()
  const createUserUseCase = new CreateUserUseCase(userRepository)

  return createUserUseCase
}
