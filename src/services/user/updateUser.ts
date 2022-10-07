import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";
import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";

export class UpdateUserUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userId: string, userBody: UserInterface) {
    const foundUser: any = await this.repository.getUserById(userId);
    const body = Object.assign(foundUser, userBody);
    const updatedUser = await this.repository.updateUser(userId, body);
    return updatedUser;
  }
}
