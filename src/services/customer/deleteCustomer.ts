import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class DeleteCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute(customerId: number) {
    return new Promise((resolve) => {
      const deletedCustomer = this.repository.deleteCustomer(customerId);
      resolve(deletedCustomer);
    });
  }
}
