import { UserInterface } from "../interfaces/entities.interfaces/user.interface";
import { users } from "../mocks/user";

export class UserRepository {
  createUser(userBody: UserInterface) {
    users.push(userBody);
    return { message: "User created." };
  }

  getUserByName(userName: string) {
    return users.filter((user) => user.name === userName);
  }

  getUserById(userId: number) {
    return users.filter((user) => user.id === userId);
  }

  deleteUser(userId: number) {
    users.map((user, index) => {
      if (user.id === userId) {
        users.splice(index, 1);
      }
    });
    return { message: "User deleted." };
  }

  updateUser(userId: number, userBody: UserInterface) {
    users.map((user, index) => {
      if (user.id === userId) {
        users.splice(index, 1, userBody);
      }
    });
    return { message: "User updated." };
  }
}
