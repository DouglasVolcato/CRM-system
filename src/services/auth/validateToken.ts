import { cryptography } from "../../helpers/cryptography";
import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";
import { users } from "../../mocks/user";

export class ValidateTokenUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userToken: string): Promise<boolean> {
    for (let user of users) {
      if (cryptography.generateToken(user.email) === userToken) {
        return true;
      }
    }
    return false;
  }
}
