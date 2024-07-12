import { makeCreateRoleUseCase } from '@/use-cases/factory/make-create-role-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerBodySchema.parse(request.body)

  const createRoleUseCase = makeCreateRoleUseCase()

  const role = await createRoleUseCase.handler({
    name,
  })

  return reply.status(201).send(role)
}
