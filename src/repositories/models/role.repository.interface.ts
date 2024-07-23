import { IRole } from '@/entities/models/role.interface'

export interface IRoleRepository {
  create({ name }: IRole): Promise<IRole | undefined>
}
