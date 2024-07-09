import { IUser } from '@/entities/models/user.interface'

export class User implements IUser {
  id: number
  username: string
  name: string
  cpf: string
  password: string

  constructor(
    username: string,
    name: string,
    email: string,
    cpf: string,
    password: string,
  ) {
    this.username = username
    this.name = name
    this.cpf = cpf
    this.password = password
  }
}
