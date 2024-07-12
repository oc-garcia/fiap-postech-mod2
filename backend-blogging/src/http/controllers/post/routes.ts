import { FastifyInstance } from 'fastify'
import { create } from './create'
import { update } from './update'
import { deletePost } from './delete'
import { findAll } from './find-all'
import { findById } from './find-by-id'
import { findWordKey } from './find-word-key'
import { findOnePage } from './find-one-page'

export async function postRoutes(app: FastifyInstance) {
  app.post('/post', create)
  app.put('/post/:id', update)
  app.delete('/post/:id', deletePost)
  app.get('/post/all', findAll)
  app.get('/post/:id', findById)
  app.get('/post/wordkey/:wordkey', findWordKey)
  app.get('/post/onepage', findOnePage)
}
