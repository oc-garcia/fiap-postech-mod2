import { makeAssignUserRoleUseCase } from '@/use-cases/factory/make-assign-user-role.use.case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function assign(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    user_id: z.coerce.number(),
    role_id: z.coerce.number(),
  })

  const { user_id, role_id } = registerBodySchema.parse(request.body)

  const assignUserRoleUseCase = makeAssignUserRoleUseCase()

  const role = await assignUserRoleUseCase.handler({
    user_id,
    role_id,
  })

  return reply.status(201).send(role)
}
