import { IPost } from './models/post.interface'

export class Post implements IPost {
  id: number
  title: string
  content: string
  creation_date: Date
  update_date: Date
  author: number

  constructor(
    title: string,
    content: string,
    creation_date: Date,
    update_date: Date,
    author: number,
  ) {
    this.title = title
    this.content = content
    this.creation_date = creation_date
    this.update_date = update_date
    this.author = author
  }
}
