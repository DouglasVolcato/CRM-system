import { cryptography } from "../../helpers/cryptography";
import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class ComparePasswordUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute(userPassword: string, userEmail: string): Promise<boolean> {
    const foundUser = await this.repository.getUserByEmail(userEmail);

    if (!foundUser) {
      throw new Error("User not found.");
    }

    const result = cryptography.comparePassword(
      userPassword,
      foundUser.password
    );

    if (result === false) {
      throw new Error("Invalid password.");
    }

    return result;
  }
}
