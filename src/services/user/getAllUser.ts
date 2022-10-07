import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetAllUserUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute() {
    const foundUsers = await this.repository.getAllUsers();
    return foundUsers;
  }
}
