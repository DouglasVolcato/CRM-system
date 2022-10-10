import { UserInterface } from "../entities.interfaces/user.interface";

export interface UserRepositoryInterface {
  createUser(userBody: UserInterface): Promise<UserInterface>;

  getAllUsers(): Promise<UserInterface[]>;

  getUserByName(userName: string): Promise<UserInterface[]>;

  getUserById(userId: string): Promise<UserInterface>;

  getUserByEmail(userEmail: string): Promise<UserInterface>;

  deleteUser(userId: string): Promise<UserInterface>;

  updateUser(userId: string, userBody: UserInterface): Promise<UserInterface>;
}
