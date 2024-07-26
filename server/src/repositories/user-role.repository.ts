import { database } from '@/lib/db'
import { IUserRoleRepository } from './models/user-role.repository.iterface'
import { IUserRole } from '@/entities/models/user-role.interface'

export class UserRoleRepository implements IUserRoleRepository {
  public async assign({
    user_id,
    role_id,
  }: IUserRole): Promise<IUserRole | undefined> {
    const result = await database.clientIstance?.query<IUserRole>(
      `INSERT INTO user_role (user_id, role_id) VALUES ($1,$2) RETURNING *`,
      [user_id, role_id],
    )

    return result?.rows[0]
  }
}
