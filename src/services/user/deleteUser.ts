import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";
import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class DeleteUserUsecase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userId: string): Promise<UserInterface> {
    const deletedUser = await this.repository.deleteUser(userId);
    if (deletedUser === undefined) {
      throw new Error("User not found to delete.");
    }
    return deletedUser;
  }
}
