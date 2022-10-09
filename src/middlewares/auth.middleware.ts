import * as http from "http";
import { UserRepository } from "../repositories/user.repository";
import { ValidateTokenUseCase } from "../services/auth.services.index";

export async function authMiddleware(
  req: http.IncomingMessage,
  res: http.ServerResponse
): Promise<void | http.ServerResponse<http.IncomingMessage>> {
  const token = req.headers.authorization;

  if (!token) {
    res.writeHead(498, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Invalid token." }));
  }

  const tokenValidation = await new ValidateTokenUseCase(
    new UserRepository()
  ).execute(token);

  if (!tokenValidation) {
    res.writeHead(498, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Invalid token." }));
  }

  req.headers = { authorization: "authorized" };

  return;
}
