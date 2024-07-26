import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '@/repositories/models/post.repository.interface'

export class FindPostOnePageUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(page: number, limit: number): Promise<IPost[] | undefined> {
    return this.postRepository.findOnePage(page, limit)
  }
}
