import { IUser } from "@/entities/models/user.interface";
import { IUserRepository } from "@/repositories/models/user.repository.interface";


export class GetAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(): Promise<IUser[]> {
    return this.userRepository.getAll();
  }
}
