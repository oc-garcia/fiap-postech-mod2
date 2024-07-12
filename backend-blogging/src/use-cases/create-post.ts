import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from '@/repositories/models/post.repository.interface'

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(post: IPost, author: number): Promise<IPost | undefined> {
    return this.postRepository.create(post, author)
  }
}
