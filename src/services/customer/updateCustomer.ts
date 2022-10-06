import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class UpdateCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute(customerId: number, customerBody: CustomerInterface) {
    return new Promise((resolve) => {
      const updatedCustoer = this.repository.updateCustomer(
        customerId,
        customerBody
      );
      resolve(updatedCustoer);
    });
  }
}
