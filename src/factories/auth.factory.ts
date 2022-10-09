import * as http from "http";
import { AuthController } from "../controllers/auth.controller";
import { UserRepository } from "../repositories/user.repository";
import { AuthRoutes } from "../routes/auth.routes";
import * as services from "../services/auth.services.index";

export function makeAuthFactory(
  router: string,
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const userRepository = new UserRepository();

  const comparePasswordUseCase = new services.ComparePasswordUseCase(
    userRepository
  );
  const generateTokenUseCase = new services.GenerateTokenUseCase();
  const validateTokenUseCase = new services.ValidateTokenUseCase(
    userRepository
  );

  const authController = new AuthController({
    comparePasswordUseCase,
    generateTokenUseCase,
    validateTokenUseCase,
  });

  const authRoutes = new AuthRoutes(authController, router, req, res);

  return authRoutes.route();
}
