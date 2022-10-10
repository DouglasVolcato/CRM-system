import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";
import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";
import { User } from "../../entities/user.entity";

export class CreateUserUsecase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userBody: UserInterface): Promise<UserInterface> {
    const body = new User(userBody);
    body.validate();
    const newUser = await this.repository.createUser(body.getUser());
    return newUser;
  }
}
