import { makeFindPostOnePageUseCase } from '@/use-cases/factory/make-find-post-one-page'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findOnePage(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerQuerySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number(),
  })
  const { page, limit } = registerQuerySchema.parse(request.query)

  const findOnePageUsecase = makeFindPostOnePageUseCase()

  const posts = await findOnePageUsecase.handler(page, limit)

  return reply.status(200).send(posts)
}
