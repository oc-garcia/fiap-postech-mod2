import { IUser } from "@/entities/models/user.interface";
import { IUserRepository } from "./models/user.repository.interface";
import { database } from "@/lib/db";

export class UserRepository implements IUserRepository {
  public async create({ username, name, cpf, password }: IUser): Promise<IUser | undefined> {
    const result = await database.clientIstance?.query<IUser>(
      `INSERT INTO "user" (username, name, cpf, password) VALUES ($1, $2, $3, $4) RETURNING *`,
      [username, name, cpf, password]
    );

    return result?.rows[0];
  }

  public async findByUsername(username: string): Promise<IUser | undefined> {
    const result = await database.clientIstance?.query<IUser>(`SELECT * FROM "user" WHERE "user".username = $1`, [
      username,
    ]);

    return result?.rows[0];
  }

  public async getAll(): Promise<IUser[]> {
    const result = await database.clientIstance?.query<IUser>(`SELECT * FROM "user"`);

    return result?.rows || [];
  }
}
