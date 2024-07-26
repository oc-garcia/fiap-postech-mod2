import { FastifyInstance } from 'fastify'
import { create } from './create'

export async function roleRoutes(app: FastifyInstance) {
  app.post('/role', create)
}
