import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '@/repositories/models/post.repository.interface'

export class FindPostAllUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(): Promise<IPost[] | undefined> {
    return this.postRepository.findAll()
  }
}
