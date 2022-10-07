import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetAllCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute() {
    const foundCustomers: any = await this.repository.getAllCustomers();
    if (
      foundCustomers === null ||
      foundCustomers === undefined ||
      foundCustomers.length === 0
    ) {
      throw new Error("There are no customers in database.");
    }
    return foundCustomers;
  }
}
