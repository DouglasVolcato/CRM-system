import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserServicesInterface {
  createUserUsecase: {
    execute(userBody: UserInterface): { message: string };
  };

  deleteUserUsecase: {
    execute(userId: number): { message: string };
  };

  getUserByIdUseCase: {
    execute(userId: number): UserInterface[];
  };

  getUserByNameUseCase: {
    execute(userName: string): UserInterface[];
  };

  updateUserUseCase: {
    execute(userId: number, userBody: UserInterface): { message: string };
  };
}
