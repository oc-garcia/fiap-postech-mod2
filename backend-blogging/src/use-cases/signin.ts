import { IUserRepository } from '@/repositories/models/user.repository.interface'

export class SigninUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(username: string) {
    const user = await this.userRepository.findByUsername(username)

    if (!user) {
      throw new Error()
    }
    return user
  }
}
