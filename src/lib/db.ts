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

  private async connection() {
    try {
      this.client = await this.pool.connect()
      console.log('Conexão com o banco de dados realizada com sucesso!')
    } catch (error) {
      console.error(`Erro na conexão, erro: ${error}`)

      throw new Error(`Erro na conexão, erro: ${error}`)
    }
  }

  get clientIstance() {
    return this.client
  }
}

export const database = new Database()
