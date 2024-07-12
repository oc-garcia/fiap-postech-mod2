import { makeSigninUseCase } from '@/use-cases/factory/make-signin-use-case'
import { compare } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function signin(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(request.body)

  const signinUseCase = makeSigninUseCase()

  const user = await signinUseCase.handler(username)

  const doestPasswordMatch = await compare(password, user.password)

  if (!doestPasswordMatch) {
    throw new Error()
  }

  const token = await reply.jwtSign({ id: user.id, username: user.username })

  return reply.status(200).send({ token })
}
