import { IUserRole } from '@/entities/models/user-role.interface'

export interface IUserRoleRepository {
  assign({ user_id, role_id }: IUserRole): Promise<IUserRole | undefined>
}
