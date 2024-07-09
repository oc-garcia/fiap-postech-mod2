import { IUser } from '@/entities/models/user.interface'

export class User implements IUser {
  id: number
  name: string
  cpf: string
  password: string

  constructor(name: string, email: string, cpf: string, password: string) {
    this.name = name
    this.cpf = cpf
    this.password = password
  }
}
