import { PostRepository } from '@/repositories/post.repository'
import { FindPostOnePageUseCase } from '../find-post-one-page'

export function makeFindPostOnePageUseCase() {
  const postRepository = new PostRepository()
  const findPostOnePageUseCase = new FindPostOnePageUseCase(postRepository)

  return findPostOnePageUseCase
}
