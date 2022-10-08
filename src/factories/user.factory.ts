import { UserController } from "../controllers/user.controller";
import * as http from "http";
import { UserRepository } from "../repositories/user.repository";
import { UserRoutes } from "../routes/user.routes";
import * as services from "../services/user.services.index";

export function makeUserFactory(
  router: string,
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const userRepository = new UserRepository();

  const createUserUsecase = new services.CreateUserUsecase(userRepository);
  const deleteUserUsecase = new services.DeleteUserUsecase(userRepository);
  const getAllUserUseCase = new services.GetAllUserUseCase(userRepository);
  const getUserByIdUseCase = new services.GetUserByIdUseCase(userRepository);
  const getUserByEmailUseCase = new services.GetUserByEmailUseCase(
    userRepository
  );
  const getUserByNameUseCase = new services.GetUserByNameUseCase(
    userRepository
  );
  const updateUserUseCase = new services.UpdateUserUseCase(userRepository);

  const userController = new UserController({
    createUserUsecase,
    deleteUserUsecase,
    getAllUserUseCase,
    getUserByIdUseCase,
    getUserByEmailUseCase,
    getUserByNameUseCase,
    updateUserUseCase,
  });

  const userRoutes = new UserRoutes(userController, router, req, res);

  return userRoutes.route();
}
