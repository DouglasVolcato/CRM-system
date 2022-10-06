import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class DeleteUserUsecase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userId: number) {
    return new Promise((resolve) => {
      const deletedUser = this.repository.deleteUser(userId);
      resolve(deletedUser);
    });
  }
}
