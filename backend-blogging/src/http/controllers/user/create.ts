import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { hash } from 'bcryptjs'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    cpf: z.string(),
    password: z.string(),
  })

  const { name, cpf, password } = registerBodySchema.parse(request.body)

  const hashPassword = await hash(password, 8)

  const userWithHashedPassword = { name, cpf, password: hashPassword }

  const createUserUseCase = makeCreateUserUseCase()

  const user = await createUserUseCase.handler(userWithHashedPassword)

  return reply.status(201).send(user)
}
