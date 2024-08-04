import { makeFindPostWordKeyUseCase } from '@/use-cases/factory/make-find-post-word-key'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findWordKey(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    wordkey: z.string(),
  })
  const { wordkey } = registerParamsSchema.parse(request.params)

  const findWordKeyUsecase = makeFindPostWordKeyUseCase()

  const posts = await findWordKeyUsecase.handler(wordkey)

  return reply.status(200).send(posts)
}
