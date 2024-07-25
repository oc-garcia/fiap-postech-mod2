import { env } from '@/env'
import { Pool, PoolClient } from 'pg'

const connectionString =
  process.env.DB_URL ||
  `postgresql://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@postgres:${env.DATABASE_PORT}/${env.DATABASE_NAME}`

class Database {
  private pool: Pool
  private client: PoolClient | undefined

  constructor() {
    this.pool = new Pool({
      connectionString,
    })

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err)
      process.exit(-1)
    })

    this.connection()
  }

  private async connection(attempt: number = 1) {
    try {
      this.client = await this.pool.connect()
      console.log('Connected to PostgreSQL!')
    } catch (error) {
      console.error(`Connection attempt ${attempt} failed, error: ${error}`)
      if (attempt < 5) {
        const delay = 2 ** attempt * 1000 // Exponential backoff
        console.log(
          `Retrying connection attempt ${attempt + 1} in ${delay / 1000}s`,
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        this.connection(attempt + 1)
      } else {
        throw new Error(`All connection attempts failed, error: ${error}`)
      }
    }
  }

  get clientInstance() {
    return this.client
  }
}

export const database = new Database()
