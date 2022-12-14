import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";
import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByEmailUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userEmail: string): Promise<UserInterface> {
    const foundUser = await this.repository.getUserByEmail(userEmail);
    if (foundUser === undefined) {
      throw new Error("User not found.");
    }
    return foundUser;
  }
}
