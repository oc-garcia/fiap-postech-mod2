import fastify from 'fastify'
import { userRoutes } from './http/controllers/user/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { validateJWT } from './http/middlewares/jwt-validate'
import { postRoutes } from './http/controllers/post/routes'
import { roleRoutes } from './http/controllers/role/routes'
import { userRoleRoutes } from './http/controllers/userRole/routes'
import { globalErrorHandler } from './utils/global-error-handler'
import fastifyCors from '@fastify/cors'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '10h' },
})

app.register(fastifyCors, {
  origin: "*",
});

//app.addHook('onRequest', validateJWT)

app.register(userRoutes)
app.register(postRoutes)
app.register(roleRoutes)
app.register(userRoleRoutes)

app.setErrorHandler(globalErrorHandler)
