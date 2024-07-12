import { IPost } from '@/entities/models/post.interface'
import { IPostRepository } from './models/post.repository.interface'
import { database } from '@/lib/db'

export class PostRepository implements IPostRepository {
  public async create(
    { title, content, creation_date, update_date }: IPost,
    author: number,
  ): Promise<IPost | undefined> {
    const result = await database.clientIstance?.query<IPost>(
      `INSERT INTO post 
      (title, content, creation_date, update_date, author)
      VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [title, content, creation_date, update_date, author],
    )

    return result?.rows[0]
  }

  public async update({
    id,
    title,
    content,
    update_date,
    author,
  }: IPost): Promise<IPost | undefined> {
    const result = await database.clientIstance?.query<IPost>(
      `UPDATE post
        SET title = $1, 
            content = $2, 
            update_date = $3, 
            author = $4
        WHERE id = $5
        RETURNING *`,
      [title, content, update_date, author, id],
    )

    return result?.rows[0]
  }

  public async delete(id: number): Promise<void> {
    await database.clientIstance?.query<IPost>(
      `DELETE FROM post
        WHERE id = $1`,
      [id],
    )
  }

  public async findById(id: number): Promise<IPost | undefined> {
    const result = await database.clientIstance?.query<IPost>(
      `SELECT *
        FROM post
        WHERE id = $1`,
      [id],
    )

    return result?.rows[0]
  }

  public async findOnePage(
    page: number,
    limit: number,
  ): Promise<IPost[] | undefined> {
    const offset = (page - 1) * limit

    const result = await database.clientIstance?.query<IPost>(
      `SELECT *
      FROM post
      LIMIT $1 OFFSET $2`,
      [limit, offset],
    )

    return result?.rows || []
  }

  public async findWordKey(wordKey: string): Promise<IPost[] | undefined> {
    const result = await database.clientIstance?.query<IPost>(
      `SELECT *
        FROM post
        WHERE content LIKE '%${wordKey}%' OR title LIKE '%${wordKey}%'`,
    )

    return result?.rows || []
  }

  public async findAll(): Promise<IPost[] | undefined> {
    const result = await database.clientIstance?.query<IPost>(
      `SELECT *
        FROM post`,
    )

    return result?.rows || []
  }
}
