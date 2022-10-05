import { UserInterface } from "../interfaces/entities.interfaces/user.interface";
import { users } from "../mocks/user";

export class UserRepository {
  static createUser(userBody: UserInterface) {
    users.push(userBody);
    return { message: "User created." };
  }

  static getUserByName(userName: string) {
    return users.filter((user) => user.name === userName);
  }

  static getUserById(userId: number) {
    return users.filter((user) => user.id === userId);
  }

  static deleteUser(userId: number) {
    users.map((user, index) => {
      if (user.id === userId) {
        users.splice(index, 1);
      }
    });
    return { message: "User deleted." };
  }

  static updateUser(userId: number, userBody: UserInterface) {
    users.map((user, index) => {
      if (user.id === userId) {
        users.splice(index, 1, userBody);
      }
    });
    return { message: "User updated." };
  }
}
