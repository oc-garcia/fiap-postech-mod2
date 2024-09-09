import { FastifyInstance } from "fastify";
import { create } from "./create";
import { signin } from "./signin";
import { getAllUsers } from "./find-all";

export async function userRoutes(app: FastifyInstance) {
  app.post("/user", create);
  app.post("/user/signin", signin);
  app.get("/user", getAllUsers);
}
