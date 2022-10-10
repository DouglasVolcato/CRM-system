import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class DeleteCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerId: string): Promise<CustomerInterface> {
    const deletedCustomer = await this.repository.deleteCustomer(customerId);
    if (deletedCustomer === undefined) {
      throw new Error("Customer not found to delete.");
    }
    return deletedCustomer;
  }
}
