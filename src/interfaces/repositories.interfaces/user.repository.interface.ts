import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserRepositoryInterface {
  createUser(userBody: UserInterface): { message: string };

  getUserByName(userName: string): UserInterface[];

  getUserById(userId: number): UserInterface[];

  deleteUser(userId: number): { message: string };

  updateUser(userId: number, userBody: UserInterface): { message: string };
}
