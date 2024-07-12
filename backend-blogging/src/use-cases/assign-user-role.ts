import { IUserRole } from '@/entities/models/user-role.interface'
import { IUserRoleRepository } from '@/repositories/models/user-role.repository.iterface'

export class AssignUserRoleUseCase {
  constructor(private userRoleRepository: IUserRoleRepository) {}

  async handler(userRole: IUserRole): Promise<IUserRole | undefined> {
    return this.userRoleRepository.assign(userRole)
  }
}
