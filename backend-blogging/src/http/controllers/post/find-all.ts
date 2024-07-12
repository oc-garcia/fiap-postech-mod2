import { makeFindPostAllUseCase } from '@/use-cases/factory/make-find-post-all'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findAll(request: FastifyRequest, reply: FastifyReply) {
  const findPostAllUsecase = makeFindPostAllUseCase()

  const posts = await findPostAllUsecase.handler()

  return reply.status(200).send(posts)
}
