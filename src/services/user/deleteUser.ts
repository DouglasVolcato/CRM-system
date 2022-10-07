import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class DeleteUserUsecase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userId: string) {
    const deletedUser = await this.repository.deleteUser(userId);
    return deletedUser;
  }
}
