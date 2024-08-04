import { IRole } from '@/entities/models/role.interface'
import { IRoleRepository } from '@/repositories/models/role.repository.interface'

export class CreateRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}

  async handler(role: IRole): Promise<IRole | undefined> {
    return this.roleRepository.create(role)
  }
}
