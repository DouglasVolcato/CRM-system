import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByNameUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userName: string) {
    const foundUser = await this.repository.getUserByName(userName);
    return foundUser;
  }
}
