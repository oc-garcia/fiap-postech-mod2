import { makeFindPostByIdUseCase } from '@/use-cases/factory/make-find-post-by-id'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const findByIdUsecase = makeFindPostByIdUseCase()

  const address = await findByIdUsecase.handler(id)

  return reply.status(200).send(address)
}
