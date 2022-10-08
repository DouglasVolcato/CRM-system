import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserServicesInterface {
  createUserUsecase: {
    execute(userBody: UserInterface): Promise<unknown> | UserInterface;
  };

  deleteUserUsecase: {
    execute(userId: string): Promise<unknown> | UserInterface;
  };

  getAllUserUseCase: {
    execute(): Promise<unknown> | UserInterface[];
  };

  getUserByIdUseCase: {
    execute(userId: string): Promise<unknown> | UserInterface;
  };

  getUserByEmailUseCase: {
    execute(userId: string): Promise<unknown> | UserInterface;
  };

  getUserByNameUseCase: {
    execute(userName: string): Promise<unknown> | UserInterface[];
  };

  updateUserUseCase: {
    execute(
      userId: string,
      userBody: UserInterface
    ): Promise<unknown> | UserInterface;
  };
}
