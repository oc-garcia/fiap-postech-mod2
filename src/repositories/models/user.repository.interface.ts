import { IUser } from '@/entities/models/user.interface'

export interface IUserRepository {
  create({ name, cpf, password }: IUser): Promise<IUser | undefined>
  findByUsername(username: string): Promise<IUser | undefined>
}
