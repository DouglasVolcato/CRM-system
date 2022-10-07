import { UserRepositoryInterface } from "../../interfaces/repositories.interfaces/user.repository.interface";

export class GetAllUserUseCase {
  repository: UserRepositoryInterface;

  constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  async execute() {
    const foundUsers: any = await this.repository.getAllUsers();
    if (
      foundUsers === null ||
      foundUsers === undefined ||
      foundUsers.length === 0
    ) {
      throw new Error("There are no users in database.");
    }
    return foundUsers;
  }
}
