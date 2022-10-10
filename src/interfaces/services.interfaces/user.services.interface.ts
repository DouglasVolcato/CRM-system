import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserServicesInterface {
  createUserUsecase: {
    execute(userBody: UserInterface): Promise<UserInterface>;
  };

  deleteUserUsecase: {
    execute(userId: string): Promise<UserInterface>;
  };

  getAllUserUseCase: {
    execute(): Promise<UserInterface[]>;
  };

  getUserByIdUseCase: {
    execute(userId: string): Promise<UserInterface>;
  };

  getUserByEmailUseCase: {
    execute(userEmail: string): Promise<UserInterface>;
  };

  getUserByNameUseCase: {
    execute(userName: string): Promise<UserInterface[]>;
  };

  updateUserUseCase: {
    execute(userId: string, userBody: UserInterface): Promise<UserInterface>;
  };
}
