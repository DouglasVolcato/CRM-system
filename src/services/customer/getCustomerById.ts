import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByIdUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerId: string): Promise<CustomerInterface> {
    const foundCustomer = await this.repository.getCustomerById(customerId);
    if (foundCustomer === undefined) {
      throw new Error("Customer not found.");
    }
    return foundCustomer;
  }
}
