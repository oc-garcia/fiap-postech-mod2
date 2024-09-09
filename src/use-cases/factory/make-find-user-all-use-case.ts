import { UserRepository } from "@/repositories/user.repository";
import { GetAllUsersUseCase } from "../find-user-all";

export function makeGetAllUsersUseCase() {
  const userRepository = new UserRepository();
  const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);

  return getAllUsersUseCase;
}
