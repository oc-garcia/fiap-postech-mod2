import { database } from '@/lib/db'
import { IRoleRepository } from './models/role.repository.interface'
import { IRole } from '@/entities/models/role.interface'

export class RoleRepository implements IRoleRepository {
  public async create({ name }: IRole): Promise<IRole | undefined> {
    const result = await database.clientIstance?.query<IRole>(
      `INSERT INTO role (name) VALUES ($1) RETURNING *`,
      [name],
    )

    return result?.rows[0]
  }
}
