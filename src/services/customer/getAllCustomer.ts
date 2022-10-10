import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetAllCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(): Promise<CustomerInterface[]> {
    const foundCustomers = await this.repository.getAllCustomers();
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
