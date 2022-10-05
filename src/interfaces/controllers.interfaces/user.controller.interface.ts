import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserControllerInterface {
  createUserController(
    req: { body: UserInterface },
    res: any
  ): { message: string };

  deleteUserController(
    req: { params: { id: string } },
    res: any
  ): { message: string };

  getUserByIdController(
    req: { params: { id: string } },
    res: any
  ): UserInterface[];

  getUserByNameController(
    req: { params: { name: string } },
    res: any
  ): UserInterface[];

  updateUserController(
    req: { params: { id: string }; body: UserInterface },
    res: any
  ): { message: string };
}
