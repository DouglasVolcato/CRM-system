import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByIdUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerId: string) {
    const foundCustomer = await this.repository.getCustomerById(customerId);
    if (foundCustomer === undefined) {
      throw new Error("Customer not found.");
    }
    return foundCustomer;
  }
}
