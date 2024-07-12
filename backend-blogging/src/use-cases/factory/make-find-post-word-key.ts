import { PostRepository } from '@/repositories/post.repository'
import { FindPostWordKeyUseCase } from '../find-post-word-key'

export function makeFindPostWordKeyUseCase() {
  const postRepository = new PostRepository()
  const findPostWordKeyUseCase = new FindPostWordKeyUseCase(postRepository)

  return findPostWordKeyUseCase
}
