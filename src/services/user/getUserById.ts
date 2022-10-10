import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";
import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByIdUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userId: string): Promise<UserInterface> {
    const foundUser = await this.repository.getUserById(userId);
    if (foundUser === undefined) {
      throw new Error("User not found.");
    }
    return foundUser;
  }
}
