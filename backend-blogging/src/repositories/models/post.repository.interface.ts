import { IPost } from '@/entities/models/post.interface'

export interface IPostRepository {
  create(
    { title, content, creation_date, update_date }: IPost,
    author: number,
  ): Promise<IPost | undefined>
  update({
    id,
    title,
    content,
    update_date,
    author,
  }: IPost): Promise<IPost | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<IPost | undefined>
  findOnePage(page: number, limit: number): Promise<IPost[] | undefined>
  findWordKey(wordKey: string): Promise<IPost[] | undefined>
  findAll(): Promise<IPost[] | undefined>
}
