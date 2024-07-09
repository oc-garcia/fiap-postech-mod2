import fastify from 'fastify'
import { userRoutes } from './http/controllers/user/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { validateJWT } from './http/middlewares/jwt-validate'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '10m' },
})

app.addHook('onRequest', validateJWT)

app.register(userRoutes)
