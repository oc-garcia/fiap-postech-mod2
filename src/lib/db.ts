import { env } from "@/env";
import { Pool, PoolClient } from "pg";

const CONFIG = {
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
};

class Database {
  private pool: Pool;
  private client: PoolClient | undefined;

  constructor() {
    this.pool = new Pool(CONFIG);
    this.connection();
  }

  private async connection() {
    try {
      this.client = await this.pool.connect();
      console.log("Conexão com o banco de dados realizada com sucesso! Entrega FIAP.");
    } catch (error) {
      console.error(`Erro na conexão, erro: ${error}`);

      throw new Error(`Erro na conexão, erro: ${error}`);
    }
  }

  get clientIstance() {
    return this.client;
  }
}

export const database = new Database();
