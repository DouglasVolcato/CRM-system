import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByNameUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userName: string) {
    return this.repository.getUserByName(userName);
  }
}
