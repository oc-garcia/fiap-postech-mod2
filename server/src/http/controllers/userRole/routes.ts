import { FastifyInstance } from 'fastify'
import { assign } from './assign'

export async function userRoleRoutes(app: FastifyInstance) {
  app.post('/userrole', assign)
}
