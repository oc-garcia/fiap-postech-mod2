import { makeGetAllUsersUseCase } from "@/use-cases/factory/make-find-user-all-use-case";
import { FastifyRequest, FastifyReply } from "fastify";

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
  const getAllUsersUseCase = makeGetAllUsersUseCase();

  const users = await getAllUsersUseCase.handler();

  const usersWithoutPasswords = users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });

  return reply.status(200).send(usersWithoutPasswords);
}