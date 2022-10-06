import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserServicesInterface {
  createUserUsecase: {
    execute(userBody: UserInterface): Promise<unknown> | { message: string };
  };

  deleteUserUsecase: {
    execute(userId: number): Promise<unknown> | { message: string };
  };

  getUserByIdUseCase: {
    execute(userId: number): Promise<unknown> | UserInterface[];
  };

  getUserByNameUseCase: {
    execute(userName: string): Promise<unknown> | UserInterface[];
  };

  updateUserUseCase: {
    execute(
      userId: number,
      userBody: UserInterface
    ): Promise<unknown> | { message: string };
  };
}
