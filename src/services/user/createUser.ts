import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";
import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";

export class CreateUserUsecase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  execute(userBody: UserInterface) {
    return this.repository.createUser(userBody);
  }
}
