import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../repositories/user.repository";
import { UserRoutes } from "../routes/user.routes";
import * as services from "../services/user.services.index";

export function makeUserFactory(router: string, req: any, res: any) {
  const userRepository = new UserRepository();

  const createUserUsecase = new services.CreateUserUsecase(userRepository);
  const deleteUserUsecase = new services.DeleteUserUsecase(userRepository);
  const getUserByIdUseCase = new services.GetUserByIdUseCase(userRepository);
  const getUserByNameUseCase = new services.GetUserByNameUseCase(
    userRepository
  );
  const updateUserUseCase = new services.UpdateUserUseCase(userRepository);

  const userController = new UserController({
    createUserUsecase,
    deleteUserUsecase,
    getUserByIdUseCase,
    getUserByNameUseCase,
    updateUserUseCase,
  });

  const userRoutes = new UserRoutes(userController, router, req, res);

  return userRoutes.route();
}
