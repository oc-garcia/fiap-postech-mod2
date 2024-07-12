import { PostRepository } from '@/repositories/post.repository'
import { FindPostAllUseCase } from '../find-post-all'

export function makeFindPostAllUseCase() {
  const postRepository = new PostRepository()
  const findPostAllUseCase = new FindPostAllUseCase(postRepository)

  return findPostAllUseCase
}
