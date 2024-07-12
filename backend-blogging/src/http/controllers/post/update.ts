/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeUpdatePostUseCase } from '@/use-cases/factory/make-update-post-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
  })

  const { title, content } = registerBodySchema.parse(request.body)

  const updatePostUseCase = makeUpdatePostUseCase()

  const author = await request.jwtDecode().then((tokenPayload) => {
    const { id }: any = tokenPayload
    return id
  })

  const post = await updatePostUseCase.handler({
    id,
    title,
    content,
    update_date: new Date(),
    author,
  })

  console.log(post)
  return reply.status(200).send(post)
}
