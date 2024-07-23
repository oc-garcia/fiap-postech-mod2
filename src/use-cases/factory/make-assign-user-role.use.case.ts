import { UserRoleRepository } from '@/repositories/user-role.repository'
import { AssignUserRoleUseCase } from '../assign-user-role'

export function makeAssignUserRoleUseCase() {
  const userRoleRepository = new UserRoleRepository()
  const assingUserRoleUseCase = new AssignUserRoleUseCase(userRoleRepository)

  return assingUserRoleUseCase
}
