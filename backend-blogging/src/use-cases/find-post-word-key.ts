import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '@/repositories/models/post.repository.interface'

export class FindPostWordKeyUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(wordKey: string): Promise<IPost[] | undefined> {
    return this.postRepository.findWordKey(wordKey)
  }
}
