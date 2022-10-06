import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";
import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";

export class UpdateUserUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userId: number, userBody: UserInterface) {
    return new Promise((resolve) => {
      const updatedUser = this.repository.updateUser(userId, userBody);
      resolve(updatedUser);
    });
  }
}
