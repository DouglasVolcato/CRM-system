import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserRepositoryInterface {
  createUser(userBody: UserInterface): Promise<unknown> | UserInterface;

  getAllUsers(): Promise<unknown> | UserInterface[];

  getUserByName(userName: string): Promise<unknown> | UserInterface[];

  getUserById(userId: string): Promise<unknown> | UserInterface;

  deleteUser(userId: string): Promise<unknown> | UserInterface;

  updateUser(
    userId: string,
    userBody: UserInterface
  ): Promise<unknown> | UserInterface;
}
