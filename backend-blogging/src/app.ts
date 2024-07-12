import fastify from 'fastify'
import { userRoutes } from './http/controllers/user/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { validateJWT } from './http/middlewares/jwt-validate'
import { postRoutes } from './http/controllers/post/routes'
import { roleRoutes } from './http/controllers/role/routes'
import { userRoleRoutes } from './http/controllers/userRole/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '10h' },
})

app.addHook('onRequest', validateJWT)

app.register(userRoutes)
app.register(postRoutes)
app.register(roleRoutes)
app.register(userRoleRoutes)
