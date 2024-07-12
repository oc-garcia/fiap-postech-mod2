import { IPostRepository } from '@/repositories/models/post.repository.interface'

export class DeletePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(id: number): Promise<void> {
    return this.postRepository.delete(id)
  }
}
