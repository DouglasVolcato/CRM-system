import { UserInterface } from "../interfaces/entities.interfaces/user.interface";
import { users } from "../mocks/user";

export class UserRepository {
  createUser(userBody: UserInterface) {
    return new Promise((resolve) => {
      users.push(userBody);
      resolve(userBody);
    });
  }

  getAllUsers() {
    return new Promise((resolve) => {
      resolve(users);
    });
  }

  getUserByName(userName: string) {
    return new Promise((resolve) => {
      const foundUser = users.filter((user: UserInterface) =>
        user.name.includes(userName)
      );
      resolve(foundUser);
    });
  }

  getUserById(userId: string) {
    return new Promise((resolve) => {
      const foundUser = users.filter(
        (user: UserInterface) => user.id === userId
      );
      resolve(foundUser[0]);
    });
  }

  deleteUser(userId: string) {
    return new Promise((resolve) => {
      const foundUser: UserInterface[] = [];
      users.map((user: UserInterface, index: number) => {
        if (user.id === userId) {
          foundUser.push(user);
          users.splice(index, 1);
        }
      });
      resolve(foundUser[0]);
    });
  }

  updateUser(userId: string, userBody: UserInterface) {
    return new Promise((resolve) => {
      const foundUser: UserInterface[] = [];
      users.map((user: UserInterface, index: number) => {
        if (user.id === userId) {
          foundUser.push(userBody);
          users.splice(index, 1, userBody);
        }
      });
      resolve(foundUser[0]);
    });
  }
}
