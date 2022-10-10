import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";
import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByNameUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userName: string): Promise<UserInterface[]> {
    const foundUsers = await this.repository.getUserByName(userName);
    if (
      foundUsers === null ||
      foundUsers === undefined ||
      foundUsers.length === 0
    ) {
      throw new Error("Users not found.");
    }
    return foundUsers;
  }
}
