import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByNameUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerName: string): Promise<CustomerInterface[]> {
    const foundCustomers = await this.repository.getCustomerByName(
      customerName
    );
    if (
      foundCustomers === null ||
      foundCustomers === undefined ||
      foundCustomers.length === 0
    ) {
      throw new Error("Customers not found.");
    }
    return foundCustomers;
  }
}
