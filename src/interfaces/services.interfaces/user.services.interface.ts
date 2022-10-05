import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserServicesInterface {
  CreateUserUsecase: {
    execute(userBody: UserInterface): { message: string };
  };

  DeleteUserUsecase: {
    execute(userId: number): { message: string };
  };

  GetUserByIdUseCase: {
    execute(userId: number): UserInterface[];
  };

  GetUserByNameUseCase: {
    execute(userName: string): UserInterface[];
  };

  UpdateUserUseCase: {
    execute(userId: number, userBody: UserInterface): { message: string };
  };
}
