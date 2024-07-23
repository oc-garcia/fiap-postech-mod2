import { RoleRepository } from '@/repositories/role.repository'
import { CreateRoleUseCase } from '../create-role'

export function makeCreateRoleUseCase() {
  const roleRepository = new RoleRepository()
  const createRoleUseCase = new CreateRoleUseCase(roleRepository)

  return createRoleUseCase
}
