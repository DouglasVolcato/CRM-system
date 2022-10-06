import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetUserByIdUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userId: number) {
    return new Promise((resolve) => {
      const foundUser = this.repository.getUserById(userId);
      resolve(foundUser);
    });
  }
}
