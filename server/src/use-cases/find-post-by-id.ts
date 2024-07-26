import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '@/repositories/models/post.repository.interface'

export class FindPostByIdUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(id: number): Promise<IPost | undefined> {
    return this.postRepository.findById(id)
  }
}
