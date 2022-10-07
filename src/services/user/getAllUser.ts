import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetAllUserUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute() {
    return new Promise((resolve) => {
      const foundUsers = this.repository.getAllUsers();
      resolve(foundUsers);
    });
  }
}
