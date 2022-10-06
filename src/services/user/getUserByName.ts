import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByNameUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userName: string) {
    return new Promise((resolve) => {
      const foundUser = this.repository.getUserByName(userName);
      resolve(foundUser);
    });
  }
}
