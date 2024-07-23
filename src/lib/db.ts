import { env } from '@/env'
import { Pool, PoolClient } from 'pg'

const CONFIG = {
  user: env.DATABASE_USER,
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT,
}

class Database {
  private pool: Pool
  private client: PoolClient | undefined

  constructor() {
    this.pool = new Pool(CONFIG)
    this.connection()
  }

  private async connection(attempt: number = 1) {
    try {
      this.client = await this.pool.connect()
    } catch (error) {
      console.error(`Connection attempt ${attempt} failed, error: ${error}`)
      if (attempt < 5) {
        console.log(`Retrying connection attempt ${attempt + 1}`)
        await new Promise((resolve) => setTimeout(resolve, 5000))
        this.connection(attempt + 1)
      } else {
        throw new Error(`All connection attempts failed, error: ${error}`)
      }
    }
  }

  get clientIstance() {
    return this.client
  }
}

export const database = new Database()
