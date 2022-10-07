import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";
import { UserInterface } from "../../interfaces/entities.interfaces/user.interface";
import { cryptography } from "../../helpers/cryptography";

export class UpdateUserUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userId: string, userBody: UserInterface) {
    const foundUser: any = await this.repository.getUserById(userId);

    const body = {
      id: foundUser.id,
      name: userBody.name ?? foundUser.name,
      username: userBody.username ?? foundUser.username,
      email: userBody.email ?? foundUser.email,
      password: userBody.password
        ? cryptography.encryptPassword(userBody.password)
        : foundUser.password,
    };

    const updatedUser = await this.repository.updateUser(userId, body);
    return updatedUser;
  }
}
