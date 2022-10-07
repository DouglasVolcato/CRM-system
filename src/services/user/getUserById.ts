import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByIdUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userId: string) {
    const foundUser = await this.repository.getUserById(userId);
    return foundUser;
  }
}
