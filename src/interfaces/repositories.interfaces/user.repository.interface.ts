import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserRepositoryInterface {
  createUser(userBody: UserInterface): Promise<unknown> | UserInterface;

  getAllUsers(): Promise<unknown> | UserInterface[];

  getUserByName(userName: string): Promise<unknown> | UserInterface[];

  getUserById(userId: number): Promise<unknown> | UserInterface;

  deleteUser(userId: number): Promise<unknown> | UserInterface;

  updateUser(
    userId: number,
    userBody: UserInterface
  ): Promise<unknown> | UserInterface;
}
