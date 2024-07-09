import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from './models/user.repository.interface'
import { database } from '@/lib/db'

export class UserRespository implements IUserRepository {
  public async create({
    name,
    cpf,
    password,
  }: IUser): Promise<IUser | undefined> {
    const result = await database.clientIstance?.query<IUser>(
      `INSERT INTO "user" (name, cpf, password) VALUES ($1, $2, $3) RETURNING *`,
      [name, cpf, password],
    )

    return result?.rows[0]
  }
}
