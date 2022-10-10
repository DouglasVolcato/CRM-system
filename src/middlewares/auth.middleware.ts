import * as http from "http";
import { UserRepository } from "../repositories/user.repository";
import { ValidateTokenUseCase } from "../services/auth.services.index";

export async function authMiddleware(
  req: http.IncomingMessage,
  res: http.ServerResponse
): Promise<void | boolean> {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    res.writeHead(498, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid token." }));
    return false;
  }

  const tokenValidation = await new ValidateTokenUseCase(
    new UserRepository()
  ).execute(token);

  if (!tokenValidation) {
    res.writeHead(498, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid token." }));
    return false;
  }

  req.headers = { authorization: "authorized" };
  return true;
}
